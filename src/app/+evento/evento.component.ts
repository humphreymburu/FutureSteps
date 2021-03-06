import {
  Component,
  OnInit,
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

/**
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

import { EventoService } from './evento-service';
import { IEvento } from 'src/app/+evento/shared/evento-model';


console.log('`Detail` component loaded asynchronously');

@Component({
  selector: 'detail',
  template: `
  <div class="upcoming-events">
    <h1 class="title">Upcoming Events</h1>
  </div>

  <div fxLayout="row" fxLayoutAlign="start center" fxLayoutGap="10px" fxLayoutWrap class="wrapper">
  <evento-thumbnail *ngFor="let event of eventos" [event] = "event"></evento-thumbnail>
  </div>
  `,
  styles: [`
  .upcoming-events {
    padding: 35px 20px;
    text-align: center; 
    letter-spacing: 2px;
    color: #333;
  }
  .title {
    font-size: 18px;
    font-weight: 400;
  }
  .wrapper {
  }
   
  `]
})
export class EventoComponent implements OnInit {

//events: IEvento;
eventos: IEvento[];

   constructor(private eventService: EventoService, private route: ActivatedRoute) {

   }

    ngOnInit() {
     //this.eventService.getEvents().subscribe(events => {this.events = events});
    // this.events = this.route.snapshot.data['events'];
     this.getEventos();

     console.log("test", this.eventos);
   }


   getEventos(): void {
    this.eventService.getEventos()
    .subscribe(eventos => this.eventos = eventos);
  }

}
