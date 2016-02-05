import 'rxjs/Rx';

import { bootstrap, Title } from 'angular2/platform/browser';

import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { App } from './component/app';

var universalInjectables = [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  Title
];

bootstrap(App, universalInjectables); 