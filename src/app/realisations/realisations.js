import template from "./realisations.html";

export default class Realisations extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = template;
    }
}
customElements.define("ravenrock-realisations", Realisations);