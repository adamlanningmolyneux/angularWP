import {Component} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';


@Component({
  selector: 'my-app',
  templateUrl: 'wp-content/themes/angularwp/app/component/posts.html'
})

export class AppPosts { 

  posts: Array;
  http: Http;

  constructor(http: Http) {
    this.http = http;
    this.loadPosts();
  }

  loadPosts(){
  	this.http.get('/wp-json/wp/v2/posts/')
	    .map((res: Response) => res.json())
      .subscribe(res => this.posts = res);
  }

	logError(err) {
	  console.error('There was an error: ' + err);
	}

}