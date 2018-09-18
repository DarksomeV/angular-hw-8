import {Directive, Input, OnChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myIf]'
})
export class MyIfDirective{
  @Input() condition: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input() set myIf(condition) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
