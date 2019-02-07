import { LitElement, html, customElement } from 'lit-element';
import { style } from './button.css';

@customElement('yo-button')
export class Button extends LitElement {
    static style = style;
    
    render() {
        return html`<button>Yo Button</button>`
    }
}