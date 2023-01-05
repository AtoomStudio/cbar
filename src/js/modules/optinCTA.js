const optinCTAs = document.querySelectorAll('[data-optin-cta]');

function bindCTAs() {
    optinCTAs.forEach((cta) => {
        cta.addEventListener('click', async e => {
            e.preventDefault();
            
            const group = cta.dataset.optinCtaGroup;
            const session = cta.dataset.optinCtaSession;
            const successText = cta.dataset.optinCtaSuccess;
            const errorText = cta.dataset.optinCtaError;
            cta.classList.add('btn--loading');
            try {
                await sendCoupon(code);
                cta.classList.add('btn--disabled');
                if (successText) {
                    cta.innerHTML = successText;
                }
            } catch (error) {
                if (errorText) {
                    cta.classList.add('btn--disabled');
                    cta.innerHTML = errorText;
                }
                console.log("No se ha podido aplicar el código", "error");
            } finally {
                cta.classList.remove('btn--loading');
            }
        });
    });
}

async function sendCoupon(code) {
    try {
        const response = await fetch(`/utils/groupAction.jsp?action=add&group=${group}&session=${session}`);
        return response.json();
    } catch (error) {
        console.log("Error fetching optinGroup", error);
    }
}

function optinCTA() {
    if (optinCTAs) {
        bindCTAs();
    }
}

export default optinCTA;