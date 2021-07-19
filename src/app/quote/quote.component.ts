import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [

    new Quote(1,'The happiness of your life depends upon the quality of your thoughts, therefore guard accordingly; and take care that you entertain no notions unsuitable to virtue, and reasonable nature.','Marcus Aurelius Antoninus',new Date(2021,7,18)),
    new Quote(2,'Nothing amuses me more than the easy manner with which everybody settles the abundance of those who have a great deal less than themselves.','Jane Austen',new Date(2021,7,19)),
    new Quote(3,'Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.','Charles Dickens',new Date(2021,7,17)),
    new Quote(4,'Conversation should be pleasant without scurrility, witty without affectation, free without indecency, learned without conceitedness, novel without falsehood.','William Shakespeare',new Date(2021,7,18)),
    new Quote (5,'What we do is less than a drop in the ocean. But if it were missing, the ocean would lack something..','Mother Teresa',new Date(2021,7,18))
  ];
  preNum!:number
  lastNum!:number
  counter!:number
  
  upvote(i: number){
    this.quotes[i].upvotes+=1
  }
  downvote(i:number){
    this.quotes[i].downvotes+=1
  }
  toWritten(i: number){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return this.preNum
  }
  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  writtenQuote(isWritten: any, index: any){
    if (isWritten) {
      let toWritten = confirm(`Are you sure you want to delete this ${this.quotes[index].name}?`)

      if(toWritten){
      this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  color = '';

  constructor() { }

  ngOnInit() {
  }

}
