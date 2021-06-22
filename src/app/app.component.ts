import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { SunSearchService, SunThemeService } from 'sunbird-seven-ui';
import { AppService } from './app.service';

import { MENU_ITEMS } from './app-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menu = MENU_ITEMS;
  results$: Observable<String[]>;
  needHelpIcon = true;

  constructor(
    private appService: AppService,
    private searchService: SunSearchService,
    private themeService: SunThemeService
  ) {}

  ngOnInit() {
    this.results$ = this.searchService
      .onSearchSubmit()
      .pipe(switchMap((query: string) => this.appService.search(query)));
  }

  logQuery($event) {
    console.log($event);
  }

  helpClicked() {
    console.log('Implementation example');
  }

  toggleTheme() {
    this.themeService.changeTheme(this.themeService.currentTheme === 'light' ? 'dark' : 'light');
  }

  onPaste($event) {
    console.log($event);
  }
}
