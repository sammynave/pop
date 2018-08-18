"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PopSection extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        shadowRoot.innerHTML = `
          <style>
              :host { display: inline-block; width: 5rem; height: 1rem; }
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
          <div local-class="wrapper">
            <div local-class="polygon">
              <slot name="header"></slot>
              <slot name="body"></slot>
            </div>
          </div>
      `;
    }
}
exports.PopSection = PopSection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbW15L0NvZGUvbG92ZXBvcC9wb3AvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGdCQUF3QixTQUFRLFdBQVc7SUFDekM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RCxVQUFVLENBQUMsU0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Ba0NwQixDQUFDO0lBQ04sQ0FBQztDQUNGO0FBeENELGdDQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb3BTZWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdjbG9zZWQnIH0pO1xuICAgIHNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gYFxuICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiA1cmVtOyBoZWlnaHQ6IDFyZW07IH1cbiAgICAgICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAyNWVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvbHlnb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogNWVtIDA7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnBvbHlnb246YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDEwZGVnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4MywgMTk1LCAyNTUsIDAuMjUpO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxkaXYgbG9jYWwtY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGxvY2FsLWNsYXNzPVwicG9seWdvblwiPlxuICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PlxuICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYm9keVwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgYDtcbiAgfVxufVxuIl19