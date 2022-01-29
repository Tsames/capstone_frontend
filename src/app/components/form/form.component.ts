import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //Fields
  id: number | null | undefined;
  title: string | undefined = "";
  description: string | undefined = "";
  location: string | undefined = "";
  range_begin: string | undefined ="";
  range_end: string | undefined ="";

  //Services
  evtService: EventService;
  route: ActivatedRoute;
  router: Router;

  //Button Text
  buttonText = "Create";

  constructor(
    evtService: EventService, 
    route: ActivatedRoute,
    router: Router
  ) { 
    this.evtService = evtService;
    this.route = route;
    this.router = router;
  }

  //Grab Event Details if Edit
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const selectedEvent = this.evtService.events.find((p) => p.id == params["id"]);
      if (selectedEvent) {
        this.title = selectedEvent.title;
        this.id = selectedEvent.id;
        this.description = selectedEvent.description;
        this.location = selectedEvent.location;
        this.range_begin = selectedEvent.range_begin;
        this.range_end = selectedEvent.range_end;
        this.buttonText = "Submit"
      }
    })
  }

  async handleSubmit() {
    if (this.id) {
      this.evtService.updateEvent({
        id: this.id,
        title: this.title,
        description: this.description,
        location: this.location,
        range_begin: this.range_begin,
        range_end: this.range_end
      });
    } else {
      this.evtService.createEvent({
        title: this.title,
        description: this.description,
        location: this.location,
        range_begin: this.range_begin,
        range_end: this.range_end
      })
    }
    this.router.navigate(["/"]);
  }

}
