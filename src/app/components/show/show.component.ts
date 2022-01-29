import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { EventService } from '../../services/event.service';
import { Event } from '../../../types';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  //Service Variables
  id: number | null = null;
  route: ActivatedRoute;
  evtService: EventService;
  router: Router;

  event: Event = {
    title: "",
    description: "",
    location: "",
    range_begin: "",
    range_end:""
  };

  constructor(route: ActivatedRoute, evtService: EventService, router: Router) {
    this.route = route;
    this.evtService = evtService;
    this.router = router;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      const selectedEvent = this.evtService.events.find((p) => p.id == params["id"]);
      if (selectedEvent) {
        this.event = selectedEvent;
      }
    });
  }

  async deleteEvent() {
    await this.evtService.DeleteEvent(this.event);
    this.router.navigate(["/"]);
  }
}
