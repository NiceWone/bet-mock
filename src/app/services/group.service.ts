import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Group} from '../model/group';
import {GROUPS} from '../model/mock-groups';
import {Match} from '../model/match';
import {MATCHES} from '../model/mock-matches';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  getGroups(): Observable<Group[]> {
    return of(GROUPS);
  }

  constructor() {
  }

  getGroup(id: number): Observable<Group> {
    return of(GROUPS.find(group => group.id === id));
  }

  getMatches(id: number) {
    return from(MATCHES.slice(id * 6, id * 6 + 6));
  }
}
