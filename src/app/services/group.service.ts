import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Group} from '../model/group';
import {HttpClient} from '@angular/common/http';
import {Match} from '../model/match';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private groupsUrl = 'api/groups';
  private matchesUrl = 'api/matches';

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupsUrl);
  }

  constructor(private http: HttpClient) {
  }

  getGroup(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.groupsUrl}/${id}`);
  }

  getMatches(id: number): Observable<Match[]> {
    return this.http.get<Match[]>(`${this.matchesUrl}`)
      .pipe(
        map(matches =>
          matches.filter(x => (x.id >= id * 6 && x.id < id * 6 + 6))
        ));
  }
}
