import template from "./services.html";

export default class Services extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }

    connectedCallBack(){
    }
}
customElements.define("ravenrock-services", Services);