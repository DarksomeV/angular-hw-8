import {Directive, TemplateRef, ViewContainerRef, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyClass]'
})
export class MyClassDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input() set appMyClass(value: any | { [myClass: string]: any}) {
    switch (typeof value) {
      // if object
      case 'object': {
        // check if array ['class', 'class']
        if (value.length) {
          // if array
          value.forEach(myClass => {
            this.element.nativeElement.classList.add(myClass);
          });
        } else {
          // if object {'class': true}
          for (let v in value) {
            if (value[v]) {
              // if classes in string {'class class class': true}
              let myClasses = v.split(' ');
              myClasses.forEach(myClass => {
                this.element.nativeElement.classList.add(myClass);
              });
            }
          }
        }
        break;
      }
      // if classes in string 'class class'
      case 'string': {
        let myClasses = value.split(' ');
        myClasses.forEach(myClass => {
          this.element.nativeElement.classList.add(myClass);
        });
        break;
      }
      default: {
        this.element.nativeElement.classList.add(value);
        break;
      }
    }
  }
}
