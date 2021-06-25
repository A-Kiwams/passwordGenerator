import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklnmopqrstuvwxyz';
    const symbols = '!@#$%*^?\()~';

    let validChards = '';
    if(this.includeLetters){
      validChards += letters;
    }
    if(this.includeNumbers){
      validChards += numbers;
    }
    if(this.includeSymbols){
      validChards += symbols;
    }
  }
}
