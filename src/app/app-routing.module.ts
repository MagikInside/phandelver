import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {SelectPlayerComponent} from './select-player/select-player.component';
import {SelectCharactersComponent} from './select-characters/select-characters.component';


const routes: Routes = [
  { path: 'select', component: SelectPlayerComponent},
  { path: 'characters', component: SelectCharactersComponent},
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
