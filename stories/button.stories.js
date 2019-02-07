import { storiesOf, html } from "@open-wc/storybook";

import "../packages/button/yo-button.js";

storiesOf("Button", module)
  .add(
    "basic",
    () => html`
      <yo-button>Button</yo-button>
    `
  )
  .add(
    "slot",
    () => html`
      <yo-button>With slot content!</yo-button>
    `
  );
