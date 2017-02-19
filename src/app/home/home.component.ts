import { Component, trigger, state, animate, style, transition, keyframes } from '@angular/core';


@Component({
  moduleId: module.id,
  animations: [
    trigger('toggleElement', [
      state('open', style({
        'height': '*'
      })),
      state('closed', style({
        'height': '0',
        'font-size' : '0px'
      })),
      transition('closed <=> open', [
        animate("1000ms 2000ms")
      ])
    ]),

    trigger('animateQuote',[
      transition('stateA <=> stateB', [
          animate(600, keyframes([
            style({
              opacity: .5, offset: 0
            }),
            style({
              opacity: 1, color: "#fcb514", offset: .5
            }),
            style({
              opacity: .7, offset: .7
            }),
            style({
              opacity: 1, offset: 1
            })
          ]))
        ])
      ])
    ],
  selector: 'home',
  templateUrl: 'home.component.html',
  styles: [
    `
      .frame{
        margin-bottom: 10px;
        padding: 10px;
        border: 5px solid #eeeeee;
        height: 170px;
      }
      .citation{
        font-size: 20px;
        color: #3268ba;
      }
    `
  ]
})
export class HomeComponent{
  open:boolean = false;
  toggleElement:string = "closed" ;

  animateQuote: string = "stateB";
  activeIndex: number = 0;

  quotes: quote[] = [
    {
      id: 0,
      text: "aa aa aa aa",
      author: "Toto"
    },
    {
      id: 1,
      text: "cc cc cc cc",
      author: "Titi"
    },
    {
      id: 2,
      text: "ab ab ab ab",
      author: "Tutu"
    }
  ]

  quote: quote = this.quotes[0];

  toggle(){
    this.open = !this.open;
    if(this.open){
      this.toggleElement = 'open';
    } else {
      this.toggleElement = 'closed';
    }
  }

  getPreviousQuote(){
    this.animateQuote = this.animateQuote === 'stateA' ? 'stateB' : 'stateA';
    this.getSomeQuote(-1);
    console.log(this.activeIndex);
  }

  getNextQuote(){
    this.animateQuote = this.animateQuote === 'stateA' ? 'stateB' : 'stateA';
    this.getSomeQuote(1);
    console.log(this.activeIndex);
  }

  getSomeQuote(increment: number){
    this.activeIndex = this.activeIndex + increment;

    if(this.activeIndex >= this.quotes.length && increment === 1){
      this.activeIndex = 0;
    }

    if(this.activeIndex < 0 && increment === -1){
      this.activeIndex = this.quotes.length - 1;
    }

    this.quote = this.quotes[this.activeIndex];
  }

  log(event: any){
    console.log(event);
  }

}

interface quote {
  id: number;
  text: string;
  author: string;
}