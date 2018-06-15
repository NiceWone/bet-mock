import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {MATCHES} from '../model/mock-matches';
import {Match} from '../model/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  getMatches(): Observable<Match[]> {
    return of(MATCHES);
  }

  constructor() {
  }
}
