import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Character} from './models/character.model';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private charactersCollection: AngularFirestoreCollection<Character>;

  constructor(private readonly afs: AngularFirestore) {
    this.charactersCollection =  afs.collection<Character>('characters');
  }

  get character$(): Observable<Character[]> {
    return this.charactersCollection.valueChanges({ idField: 'id' });
  }

  set characters(characters: Character[]) {
    characters.forEach(character => {
      this.charactersCollection.doc(character.id).set(character);
    });
  }

}
