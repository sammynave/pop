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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbW15L0NvZGUvbG92ZXBvcC9wb3AvIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLGlCQUFrQixTQUFRLFdBQVc7SUFDekM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN6RCxVQUFVLENBQUMsU0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FpQ3BCLENBQUM7SUFDTixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9wU2VjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnY2xvc2VkJyB9KTtcbiAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBwZXJzcGVjdGl2ZTogMjVlbTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb2x5Z29uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVlbSAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5wb2x5Z29uOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxMGRlZyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsIDE5NSwgMjU1LCAwLjI1KTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvbHlnb25cIj5cbiAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImJvZHlcIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH1cbn1cbiJdfQ==