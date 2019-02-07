import { LitElement, html, customElement } from 'lit-element';
import { style } from './yo-button.css';

@customElement('yo-button')
export class Button extends LitElement {
    static styles = style;

    render() {
        return html`
            <button><slot></slot></button>
        `;
    }
}
