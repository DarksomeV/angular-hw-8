import {Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective {
  @Input('appBg') bgColor;
  @Input() fontSize;

  constructor(
    private element: ElementRef,
    private  renderer: Renderer2
  ) {
  }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fontSize);

  }

}
