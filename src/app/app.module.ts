import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { InfoComponent } from './info/info.component';
import { CharactersComponent } from './characters/characters.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { SelectPlayerComponent } from './select-player/select-player.component';
import { SelectCharactersComponent } from './select-characters/select-characters.component';
import { DisplayComponent } from './display/display.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDlwY0ZtwEXwdz-pCGZXDLirPxr525n5Ws',
  authDomain: 'phandelver-e0f36.firebaseapp.com',
  projectId: 'phandelver-e0f36',
  storageBucket: 'phandelver-e0f36.appspot.com',
  messagingSenderId: '460547173709',
  appId: '1:460547173709:web:fca91513ee00d919a15b04',
  measurementId: 'G-Q09M0326L8'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    InfoComponent,
    CharactersComponent,
    SelectPlayerComponent,
    SelectCharactersComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
