const bonusCTAs = document.querySelectorAll('[data-bonus-cta]');

function bindCTAs() {
    bonusCTAs.forEach((cta) => {
        cta.addEventListener('click', async () => {
            const code = cta.dataset.bonusCtaCode;
            const redirect = cta.dataset.bonusCtaRedirect;
            const successText = cta.dataset.bonusCtaSuccess;
            const errorText = cta.dataset.bonusCtaError;
            cta.classList.add('btn--loading');
            try {
                await sendCoupon(code);
                cta.classList.add('btn--disabled');
                if (successText) {
                    cta.innerHTML = successText;
                }
                if (redirect) {
                    window.location.href = redirect;
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
    const formData = new URLSearchParams();
    formData.append('bonusCode', code);
    
    try {
        const response = await fetch('/members/bonusCode.jsp', { method: 'POST', body: formData });
        return response.json();
    } catch (error) {
        console.log("Error fetching bonusCode", error);
    }
}

function bonusCodeCTA() {
    if (bonusCTAs) {
        bindCTAs();
    }
}

export default bonusCodeCTA;