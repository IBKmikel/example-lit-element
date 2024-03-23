import { LitElement, html } from "lit-element";

export class MyElement extends LitElement{
    render(){
        return html`
            <p>Soy elemento</p>
        `;
    }
}


customElements.define('my-element', MyElement);
