export class PopSection extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML = `
          <style>
              .wrapper {
                perspective: 25em;
              }

              .polygon {
                margin: 5em 0;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 200px;
                width: 100%;
              }

              .polygon:before {
                z-index: -1;
                content: '';
                height: 100%;
                width: 150%;
                transform: rotateY(10deg);
                background-color: rgba(183, 195, 255, 0.25);
                display: inline-block;
                position: absolute;
              }
          </style>
          <div class="wrapper">
            <div class="polygon">
              <slot name="header"></slot>
              <slot name="body"></slot>
            </div>
          </div>
      `;
  }
}
