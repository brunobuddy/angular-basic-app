import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Match } from '../interfaces/match'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {}

  list(): Observable<Match[]> {
    return this.http.get(environment.apiBaseUrl + 'matches').pipe(
      map((res: Match[]) => {
        return res
      })
    )
  }

  show(id: number): Observable<Match> {
    return this.http.get(environment.apiBaseUrl + 'matches/' + id).pipe(
      map((res: Match) => {
        return res
      })
    )
  }
}
