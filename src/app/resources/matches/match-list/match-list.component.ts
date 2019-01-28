import { Component, OnInit } from '@angular/core'
import { MatchService } from '../../../common/services/match.service'
import { Match } from '../../../common/interfaces/match'

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
  providers: [MatchService]
})
export class MatchListComponent implements OnInit {
  matches: Match[]

  constructor(private matchService: MatchService) {}

  ngOnInit() {
    this.matchService.list().subscribe((res: Match[]) => {
      this.matches = res
    })
  }
}
