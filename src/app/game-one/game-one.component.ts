import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.scss']
})

export class GameOneComponent {
  leftNumber;
  rightNumber;
  score = ''

  constructor() {
    this.generateNumbers()
  }

  generateNumbers() {
    this.leftNumber = this.generateRandomNumber();
    this.rightNumber = this.generateRandomNumber();

    if (this.leftNumber == this.rightNumber) {
      this.generateNumbers()
    }
  }

  generateRandomNumber() {
    const maxNumber = 10;
    const randomDecimal = Math.random() * maxNumber;
    const randomNumber = Math.round(randomDecimal)

    return randomNumber
  }

  isGreater(firstValue, secondValue) {
    if (firstValue > secondValue) {
      this.score += '🤓'
    } else {
      this.score += '😟'
    }

    this.generateNumbers()
  }
}
