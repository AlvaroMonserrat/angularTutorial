import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "My Angular Project";
  titleState = false;

  changeTitle(){
    this.titleState = !this.titleState
    if(this.titleState){
      this.title = "Tutorial Udemy";
    }else{
      this.title = "My Angular Project";
    }
  }
}
