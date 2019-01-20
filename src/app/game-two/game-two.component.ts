import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.scss']
})
export class GameTwoComponent  {
  arrayRandomNumbers:Number[];
  previousNumber:number = 0;
  showSuccessMessage:boolean = false;
  showErrorMessage:boolean = false;
  message:string;

  constructor() { 
    this.generateNumbers()
  }

  generateNumbers() {
    this.arrayRandomNumbers = this.generateArrayRandomNumbers()
  }

  generateArrayRandomNumbers() {
    const maxNumber = 10;
    const array = []

    for (let i = 0; i < maxNumber; i++) {
      const randomNumber = Math.round(Math.random() * maxNumber)
      array.push(randomNumber)
    }

    return array
  }

  clickMe(number) {
    if(number >= this.previousNumber) {    
      this.previousNumber = number
      this.removeElement(number)
      this.message = 'Lo meeejooor'
      this.showSuccessMessage = true
      this.showErrorMessage = false
    } else {
      this.arrayRandomNumbers = []
      this.message = 'Que peye'
      this.showSuccessMessage = false
      this.showErrorMessage = true
    }
  }

  removeElement(number) {
    const position = this.arrayRandomNumbers.indexOf(number)
    this.arrayRandomNumbers.splice(position, 1)
  }

  reiniciar() {
    this.generateNumbers()
    this.message = ''
    this.showSuccessMessage = false
    this.showErrorMessage = false
    this.previousNumber = 0;
  }
}
