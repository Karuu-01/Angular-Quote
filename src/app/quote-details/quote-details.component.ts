import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote! : Quote;
  @Output () isWritten = new EventEmitter<boolean>();

  quoteWritten(written:boolean){
    this.isWritten.emit(written);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
