import { Component } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
 quotes: Quote[] = [

  
  new Quote(1,'The happiness of your life depends upon the quality of your thoughts, therefore guard accordingly; and take care that you entertain no notions unsuitable to virtue, and reasonable nature.','Marcus Aurelius Antoninus',new Date(2021,7,18)),
  new Quote(2,'Nothing amuses me more than the easy manner with which everybody settles the abundance of those who have a great deal less than themselves.','Jane Austen',new Date(2021,7,19)),
  new Quote(3,'Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.','Charles Dickens',new Date(2021,7,17)),
  new Quote(4,'Conversation should be pleasant without scurrility, witty without affectation, free without indecency, learned without conceitedness, novel without falsehood.','William Shakespeare',new Date(2021,7,18)),
  new Quote (5,'What we do is less than a drop in the ocean. But if it were missing, the ocean would lack something..','Mother Teresa',new Date(2021,7,18))
 ];
}    