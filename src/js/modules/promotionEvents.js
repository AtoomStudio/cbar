import dataLayer from "./dataLayer";


function promotionEvents() {
    const title = document.querySelector('h1');
    const type = document.querySelector('#promo-type');
    const ctas = document.querySelectorAll('.blockPromo__cta');

    dataLayer.push({ ecommerce: null });
    dataLayer.push({
        event: "view_promotion",
        ecommerce: {
            items: [{
                item_name: title,
                item_category: type
            }]
        }
    });

    ctas.forEach(cta => {
        cta.addEventListener('click', e => {
            dataLayer.push({ ecommerce: null });
            dataLayer.push({
                event: "select_promotion",
                ecommerce: {
                    items: [{
                        item_name: title,
                        item_category: type
                    }]
                }
            });
        });
    });


}

export default promotionEvents;