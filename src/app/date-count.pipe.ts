import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): string {
    let timeCount: string = "";
    let today: any = new Date();
    var difference = Math.abs(value - today) / 1000;
    var days       = Math.floor(difference / 86400);
    if(days > 0){
      timeCount   += Math.floor(days) +" days ";
    }
    difference    -= days * 86400;
    var hours      = Math.floor(difference / 3600) % 24;
    if(hours > 0){
      timeCount   += Math.floor(hours)+" hrs ";
    }
    difference    -= hours * 3600;

    var minutes    = Math.floor(difference / 60) % 60;
    if(minutes > 0){
      timeCount   += Math.floor(minutes)+" mins ";
    }
    difference    -= minutes * 60;
    var seconds    = difference % 60;
    if(seconds > 0){
      timeCount  += Math.floor(seconds)+" secs ";
    }
    return timeCount;
  }
}
