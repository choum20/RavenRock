import template from "./clients.html";

export default class Clients extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }
}
customElements.define("ravenrock-clients", Clients);