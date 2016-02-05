import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from '../component/home';

@Component({
  selector: 'angularwp',
  templateUrl: 'wp-content/themes/angularwp/app/template/app.html',
  directives: [ROUTER_DIRECTIVES],
})

@RouteConfig([
  { path: '/', as: 'Home', component: HomeComponent }
])

export class App { 

  title: string;

  constructor() {
    this.title = 'Angular WordPress';
  }

	logError(err) {
	  console.error('There was an error: ' + err);
	}

}