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

  id: number | null = null; // variable for param id
  route; // variable for route service
  evtService; // variable for event service

  event: Event = {
    title: "",
    description: "",
    location: "",
    range_begin: "",
    range_end:""
  }; // variable to hold the selected Event

  constructor(route: ActivatedRoute, evtService: EventService) {
    //assign services to properties
    this.route = route;
    this.evtService = evtService;
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
}
