import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[] = [

    new Quote(1,'Tis better to have loved and lost than to have never loved at all.','Aldred Lord Tennyson'),
  new Quote(2,'The happiness of your life depends upon the quality of your thoughts, therefore guard accordingly; and take care that you entertain no notions unsuitable to virtue, and reasonable nature.','Marcus Aurelius Antoninus' ),
  new Quote(3,'Nothing amuses me more than the easy manner with which everybody settles the abundance of those who have a great deal less than themselves.','Jane Austen' ),
  new Quote(4,'Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.','Charles Dickens' ),
  new Quote(5,'Be the change that you wish to see in the world','Mahatma Gandhi' ),
  new Quote(6,'Conversation should be pleasant without scurrility, witty without affectation, free without indecency, learned without conceitedness, novel without falsehood.','William Shakespeare'),
  new Quote (7,'What we do is less than a drop in the ocean. But if it were missing, the ocean would lack something..','Mother Teresa')
  ];
  
  toggleDetails(index: any){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  writtenQuote(isWritten: any, index: any){
    if (isWritten){
      this.quote.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
