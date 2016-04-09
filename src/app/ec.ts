import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {MdToolbar} from "@angular2-material/toolbar";
import {MdSidenav} from '@angular2-material/sidenav';

@Component({
  selector: 'ec-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/ec.html',
  directives: [ROUTER_DIRECTIVES, MdToolbar, MdSidenav],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class EcApp {

}
