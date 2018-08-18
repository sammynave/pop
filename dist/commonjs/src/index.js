"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PopSection extends HTMLElement {
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
exports.PopSection = PopSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbW15L0NvZGUvbG92ZXBvcC9wb3AvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdCQUF3QixTQUFRLFdBQVc7SUFDekM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RCxVQUFVLENBQUMsU0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQ3BCLENBQUM7SUFDTixDQUFDO0NBQ0Y7QUF2Q0QsZ0NBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFBvcFNlY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ2Nsb3NlZCcgfSk7XG4gICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDI1ZW07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9seWdvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1ZW0gMDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAucG9seWdvbjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTBkZWcpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgzLCAxOTUsIDI1NSwgMC4yNSk7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb2x5Z29uXCI+XG4gICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJib2R5XCI+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICBgO1xuICB9XG59XG4iXX0=