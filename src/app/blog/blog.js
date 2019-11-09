import template from "./blog.html";

export default class Blog extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }

    connectedCallBack(){
    }
}
customElements.define("ravenrock-blog", Blog);