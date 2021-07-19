export class Quote {
  public upvotes:number
  public downvotes:number
 showDescription: boolean;
 constructor(public id: number, public name: string, public description: string,public completeDate: Date){
   this.showDescription=false;
   this.upvotes=0
   this.downvotes=0
 }
 }
