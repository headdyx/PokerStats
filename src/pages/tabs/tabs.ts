import { Component } from '@angular/core';

import { TournamentsPage } from '../tournaments/tournaments';
import { PlayersPage } from '../players/players';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TournamentsPage;
  tab3Root = PlayersPage;

  constructor() {

  }
}
