import { Component } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';

import { PageService } from '../service/page';

@Component({
  selector: 'home',
  templateUrl: 'wp-content/themes/angularwp/app/template/home.html',
  providers: [PageService]
})

export class HomeComponent { 

  http: Http;
  pageService: PageService;
  home: Array;

  constructor(http: Http, pageService: PageService) {
    this.http = http; 
    this.pageService = pageService; 

    this.loadHome();
  }

  loadHome(){
  	this.http.get('/wp-json/')
	    .map((res: Response) => res.json())
      .subscribe(
        res => this.home = this.pageService.processPage(res)
    );
  }

	logError(err) {
	  console.error('There was an error: ' + err);
	}

}