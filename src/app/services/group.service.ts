import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {Group} from '../model/group';
import {GROUPS} from '../model/mock-groups';
import {MATCHES} from '../model/mock-matches';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupsUrl = 'api/groups';
  private matchesUrl = 'api/matches';

  /** GET heroes from the server */
  getGroups(): Observable<Group[]> {
    return of(GROUPS);
    // return this.http.get<Group[]>(this.groupsUrl);
  }

  constructor(private http: HttpClient) {
  }

  getGroup(id: number): Observable<Group> {
    return of(GROUPS.find(group => group.id === id));
  }

  getMatches(id: number) {
    return from(MATCHES.slice(id * 6, id * 6 + 6));
  }
}
