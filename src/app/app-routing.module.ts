import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOneComponent } from './game-one/game-one.component';
import { GameTwoComponent } from './game-two/game-two.component';
import { GameThreeComponent } from './game-three/game-three.component';

const routes: Routes = [
  { path: 'game-one', component: GameOneComponent },
  { path: 'game-two', component: GameTwoComponent },
  { path: 'game-three', component: GameThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
