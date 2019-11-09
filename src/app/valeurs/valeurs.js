import template from "./valeurs.html";

export default class Valeurs extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }

    connectedCallBack(){
    }
}
customElements.define("ravenrock-valeurs", Valeurs);