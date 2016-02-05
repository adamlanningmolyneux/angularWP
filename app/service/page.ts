import { Injectable } from 'angular2/core';
import { Title } from 'angular2/platform/browser';

@Injectable()

export class PageService { 

	title: Title;

  constructor( title: Title ) {
  	this.title = title;
  }

  processPage(data){
  	this.title.setTitle(data.name);
  	console.log(data);
  	return data;
  }

}