import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor = "blue";
  }

  
}
