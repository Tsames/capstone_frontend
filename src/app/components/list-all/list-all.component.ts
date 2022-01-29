import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {
  eventService: EventService;
  

  constructor(evtService : EventService) {
    this.eventService = evtService;
  }

  ngOnInit(): void {
    this.eventService.getEvents();
  }

}
