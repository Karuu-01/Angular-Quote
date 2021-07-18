import { Directive, ElementRef, HostListener } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow'
   }

   @HostListener('mousenter') onMouseEnter() {
     this.highlight('yellow')
   }
   @HostListener('mouseleave') onMouseLeave() {
    this.highlight(' ')
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
