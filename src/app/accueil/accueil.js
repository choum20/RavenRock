import template from "./accueil.html";

export default class Accueil extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }

    connectedCallBack(){
    }
}
customElements.define("ravenrock-accueil", Accueil);