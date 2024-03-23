import { LitElement, css, html } from "lit-element";

export class Message extends LitElement{

    static styles=css`
    :host{
        display:block;
        border: 1px solid-red;
        padding:10px;
    }

    div{
        background-color:blue;
        color:white;
    }
    p{
        margin-bottom:0;
    }
    `

    render(){
        return html
        `<div>
            Hola lit
            <p><b>Esto tambien va aquí</b></p>
        </div>`;
    }
}


customElements.define('lit-message', Message);