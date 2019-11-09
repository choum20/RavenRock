import template from "./equipe.html";

export default class Equipe extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }

    connectedCallBack(){
        
    }
}
customElements.define("ravenrock-equipe", Equipe);