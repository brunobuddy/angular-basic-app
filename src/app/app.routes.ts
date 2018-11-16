import { Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { MatchListComponent } from './resources/matches/match-list/match-list.component'
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component'

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'matches',
    component: MatchListComponent
  },
  {
    path: 'matches/:id',
    component: MatchDetailComponent
  }
]
