import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fibonacci';
  fibo:number=0;
  Fibonacci():void{
    let num1:number=document.getElementById("fab").value;
    let num:number=0;
    let num2:number=1;
   
    for(let i:number=3;i<=num1;i++){
      this.fibo=num+num2;
      num=num2;
      num2=this.fibo;
    }
  }
}
