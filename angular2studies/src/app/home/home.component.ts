import { Component, OnInit } from '@angular/core';
import { toast } from "angular2-materialize";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor() { }

  url = "globo.com";

 onClick(){
    toast("...and Materialize works as well!");
 };  
}
