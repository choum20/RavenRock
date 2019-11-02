import template from "./menu.html";

export default class Menu extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }
}
customElements.define("ravenrock-menu", Menu);