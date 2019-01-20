import { Component, OnInit } from '@angular/core';
import CatsService from '../services/cats-service.service';

@Component({
  selector: 'app-game-three',
  templateUrl: './game-three.component.html',
  styleUrls: ['./game-three.component.scss']
})
export class GameThreeComponent {
  countDownEmoji:number;
  gameTimer:number = 0;
  emojiArray:string[] = ['🍄', '🌺', '🐳', '🦄', '🧖🏻‍♀️', '🧟‍♀️'];
  emojiIndex:number;
  maxNumberEmoji:number = this.emojiArray.length - 1;
  countDownEmojiSize:number = 2;

  showBtnStart:boolean = false;
  scoreGame:string = '';

  emojiAskIndex:number;
  youWin:boolean = false;

  catUrl:string = ''

  constructor(private catsService: CatsService) {
    this.startGame()
   }

  startGame(): void  {
    this.randomEmoji()
  }

  randomEmoji(): void  {
    this.emojiIndex = Math.round(Math.random() * this.maxNumberEmoji)
    this.startcountDownFirstEmoji()
  }

  startcountDownFirstEmoji(): void  {
    const intervalEmoji = setInterval( () => this.intervalEmojiControl(intervalEmoji), 1000)
  }
  
  startGameCounter(): void  {
    setInterval( () => this.gameIntervalControl(), 1000)
  }

  intervalEmojiControl(intervalEmoji): void  {
    this.countDownEmoji = this.countDownEmojiSize--

    if(this.countDownEmoji < 0) {
      clearInterval(intervalEmoji)
      this.startGameCounter()
      this.thisIsYourEmoji()
    } 
  }

  gameIntervalControl(): void {
    this.gameTimer++
  }

  compareAnswer(answer): void  {
    switch (answer) {
      case 'YES':
        if (this.emojiIndex === this.emojiAskIndex) {
          this.scoreGame = this.scoreGame + '✅';
          this.finishGame()
        } else {
          this.scoreGame = this.scoreGame + '❌';
        }
        break;
      case 'NO':
        if (this.emojiIndex !== this.emojiAskIndex) {
          this.scoreGame = this.scoreGame + '✅';
          this.thisIsYourEmoji();
        } else {
          this.scoreGame = this.scoreGame + '❌';
        }
        break;
    }
  }

  thisIsYourEmoji(): void  {
    this.emojiAskIndex = Math.round(Math.random() * this.maxNumberEmoji)
  }

  finishGame(): void  {
    this.gameTimer = 0
    this.youWin = true;
    this.getCatImage()
  }

  getCatImage(): void {
    this.catsService
      .getImage()
      .subscribe(
     resultQuestion => this.catUrl = resultQuestion[0].url,
      error => (console.log('Ups! we have an error: ', error))
      )
  }
}
