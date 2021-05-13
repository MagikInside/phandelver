import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Round} from './models/round.model';
import {debounceTime, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  private roundsCollection: AngularFirestoreCollection<Round>;

  constructor(private readonly afs: AngularFirestore) {
    this.roundsCollection =  afs.collection<Round>('rounds');
  }

  get round$(): Observable<Round> {
    return this.roundsCollection.valueChanges({ idField: 'id' }).pipe(
      debounceTime(200),
      map(rounds => rounds[0])
    );
  }

  set round(round: Round) {
    this.roundsCollection.doc(round.id).update(round);
  }

}
