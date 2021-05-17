import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrls: ['./wish-message.component.css']
})
export class WishMessageComponent implements OnInit {

  public message:string = 'Hello';

  constructor() { }

  ngOnInit(): void {
  }

  public printMessage(value){
    this.message = value;
  }

}
