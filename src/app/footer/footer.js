import template from "./footer.html";

export default class Footer extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }

    connectedCallBack(){
    }
}
customElements.define("ravenrock-footer", Footer);