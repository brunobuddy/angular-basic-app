import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { HeaderComponent } from './partials/header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { MatchListComponent } from './resources/matches/match-list/match-list.component'
import { MatchDetailComponent } from './resources/matches/match-detail/match-detail.component'
import { appRoutes } from './app.routes'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MatchListComponent,
    MatchDetailComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
