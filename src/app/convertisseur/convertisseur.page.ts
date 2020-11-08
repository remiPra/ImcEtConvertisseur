import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertisseur',
  templateUrl: './convertisseur.page.html',
  styleUrls: ['./convertisseur.page.scss'],
})
export class ConvertisseurPage{
  
  euroInput:number;
  dollarInput:number;
  yuanInput:number;
  constructor() { }


euroHandler(ev){
  let result = ev.target.value
  this.euroInput = result
  this.dollarInput = 1.187 * result
  this.yuanInput = 7.85 * result
  
}
dollarHandler(ev){
  let result = ev.target.value
  this.dollarInput = result
  this.euroInput = 0.84 * result
  this.yuanInput = 6.61 * result
  
}

yuanHandler(ev){
  let result = ev.target.value
  this.yuanInput = result
  this.dollarInput = 1.187 * result
  this.euroInput = 7.85 * result
}



}
