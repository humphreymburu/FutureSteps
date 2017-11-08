import {
  Component,
  OnInit,
} from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EventoService } from "../evento-service";

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`EventoDetail` component loaded asynchronously');

@Component({
    templateUrl: './evento-detail.component.html',
    styles: [`
    .event-img: { height: 100px; }
    `]
})


export class EventoDetailComponent implements OnInit {
   event:any;
    constructor(
        private eventService: EventoService, 
        private router: Router, 
        private route: ActivatedRoute) {}
    
 ngOnInit() {
   this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  
    };

    
}