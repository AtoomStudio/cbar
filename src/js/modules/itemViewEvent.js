import cookie from "./cookie";
import dataLayer from "./dataLayer";


function itemViewEvent() {
    const item = cookie.get('cbar-selected-item');
    if (!item) return;

    dataLayer.push({ ecommerce: null }); 
    dataLayer.push({
      event: "view_item",
      ecommerce: {
        items: [JSON.parse(item)]
      }
    });
}

export default itemViewEvent;