import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fontsizechanger',
  templateUrl: './fontsizechanger.component.html',
  styleUrls: ['./fontsizechanger.component.scss']
})
export class FontsizechangerComponent implements OnInit {
  fontSize=14;
  constructor(){}
  onChange(value){
    this.fontSize =value;
  }
  ngOnInit(){

  }

}
