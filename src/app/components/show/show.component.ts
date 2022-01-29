import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { EventService } from './../../services/event.service';
import { Event } from './../../../types';

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
    //assign services to properties
    this.route = route;
    this.evtService = evtService;
    this.router = router;
  }

  ngOnInit(): void {
    //get the URL Param
    this.route.params.subscribe((params) => {
      // store the id in our properties
      this.id = params["id"];
      // find post from our service with the to selected todo
      const selectedEvent = this.evtService.events.find((p) => p.id == params["id"]);
      // if post exists assign it to post property
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
