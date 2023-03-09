import eventDispatch from "./eventDispatch";

const ANIMATION_DURATION = 200;
const ANIMATION_DELAY = 50;


function Mpu() {
    let settings = {};
    
    function mpu(params) {
        console.log(params)
        if (typeof params === 'undefined') return false;
        if (typeof params === 'string') return openMpuUrl(params);
        if (typeof params === 'object') return openMpuOptions(params);
    }

    function openMpuUrl(url) {
        if (!url) return;
        return openMpuOptions({ url: url });
    }

    function openMpuOptions(options) {
        let mpu = document.querySelector('.mpu');
        let animateEnter = true;
        if (mpu) {
            animateEnter = false;
            mpu.remove();
        }
        mpu = getTemplate();

        if (!mpu) return;

        const defaults = {
            url: '',
            popupMode: false,
            closeBtn: true,
            title: '',
            body: '',
            confirmText: '',
            cancelText: '',
            denyText: '',
            onOpen: () => { },
            onClose: () => { },
            onConfirm: () => closeMpu(),
            onCancel: () => closeMpu(),
            onDeny: () => closeMpu()
        };

        settings = Object.assign({}, defaults, options);

        if (settings.url) {
            fetchMpuContent(settings.url)
                .then(content => {
                    const fetchedContent = document.createRange().createContextualFragment(content);
                    document.querySelector('.mpu').querySelector('.mpu__content').replaceChildren(fetchedContent);;
                });
        } else {
            mpu.querySelector('.mpu__title').innerHTML = settings.title;
            mpu.querySelector('.mpu__body').innerHTML = settings.body;
            if(settings.popupMode) {
                mpu.querySelector('.mpu').classList.add('mpu--popup');
            }
            if (!settings.confirmText && !settings.cancelText && !settings.denyText) {
                mpu.querySelector('.mpu__actions').classList.remove('mpu__actions--open');
            } else {
                mpu.querySelector('.mpu__actions').classList.add('mpu__actions--open');
                if (settings.confirmText) {
                    mpu.querySelector('.mpu__btn--confirm').innerHTML = settings.confirmText;
                    mpu.querySelector('.mpu__btn--confirm').addEventListener('click', settings.onConfirm);
                } else {
                    mpu.querySelector('.mpu__btn--confirm').remove();
                }
                if (settings.cancelText) {
                    mpu.querySelector('.mpu__btn--cancel').innerHTML = settings.cancelText;
                    mpu.querySelector('.mpu__btn--cancel').addEventListener('click', settings.onCancel);
                } else {
                    mpu.querySelector('.mpu__btn--cancel').remove();
                }
                if (settings.denyText) {
                    mpu.querySelector('.mpu__btn--deny').innerHTML = settings.denyText;
                    mpu.querySelector('.mpu__btn--deny').addEventListener('click', settings.onDeny);
                } else {
                    mpu.querySelector('.mpu__btn--deny').remove();
                }
            }

        }

        if (animateEnter) {
            mpu.querySelector('.mpu').classList.add('mpu--animate-enter');
        }
        if (settings.closeBtn) {
            mpu.querySelector('.mpu__btn-close').addEventListener('click', closeMpu);
        } else {
            mpu.querySelector('.mpu__btn-close').remove();
        }

        eventDispatch('openMpu', document.querySelector('.mpu'));
        document.body.classList.toggle('mpu-open', true);
        document.body.appendChild(mpu);
        setTimeout(() => {
            document.querySelector('.mpu').classList.add('mpu--open');
            settings.onOpen();
        }, animateEnter ? ANIMATION_DELAY : 0);

        return document.querySelector('.mpu');
    }

    function getTemplate() {
        const mpuTpl = document.getElementById('mpu-tpl');
        if (!mpuTpl) return false;
        return mpuTpl.content.cloneNode(true);
    }

    function fetchMpuContent(url) {
        return fetch(url)
            .then(response => response.text())
    }

    function closeMpu() {
        const mpu = document.querySelector('.mpu');
        if (!mpu) return;

        document.querySelector('.mpu').classList.remove('mpu--open');
        setTimeout(() => {
            mpu.remove();
            document.body.classList.toggle('mpu-open', false);
            if (typeof settings.onClose === "function") settings.onClose();
            eventDispatch('closeMpu');
        }, ANIMATION_DURATION);
    }

    function mpuDataTriggers() {
        const mpuOpenBtns = document.querySelectorAll('[data-mpu-url]');
        mpuOpenBtns.forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                if(e.currentTarget.dataset.depositId) {
                    dataLayer.push({ event: 'deposit-click', "event-label": e.currentTarget.dataset.depositId })
                }
                mpu(e.currentTarget.dataset.mpuUrl);
            });
        });
    }

    return {
        mpu,
        mpuDataTriggers,
        closeMpu
    }
}

export default Mpu;