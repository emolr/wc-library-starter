import { expect, fixture } from '@open-wc/testing';
import '../packages/button/yo-button.js';

describe('yo-button', () => {
    it('should render shadowDom', async () => {
        const el = await fixture(`<yo-button></yo-button>`);
        expect(el).shadowDom.to.equal('<button><slot></slot></button>');
    });
});