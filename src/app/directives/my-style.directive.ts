import { Directive, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective {
  @Input('appMyStyle') styles: Object;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnChanges() {
    for (let s in this.styles) {
      this.renderer.setStyle(this.element.nativeElement, s, this.styles[s]);
    }
  }
}
