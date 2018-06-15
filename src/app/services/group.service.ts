import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Group} from '../model/group';
import {GROUPS} from '../model/mock-groups';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  getGroups(): Observable<Group[]> {
    return of(GROUPS);
  }

  constructor() {
  }
}
