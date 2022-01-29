import { Injectable } from '@angular/core';
import { Event } from "../../types";


@Injectable({
  providedIn: 'root'
})
export class EventService {

  url = "https://tsames-capstone-api.herokuapp.com/events/"
  events: Array<Event> = [];

  constructor() {
    this.getEvents();
  }

  async getEvents() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.events = data;
    return data;
  }

  async createEvent(event: Event) {
    await fetch(this.url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    this.getEvents();
  }

  async updateEvent(event: Event) {
    await fetch(this.url + event.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    });

    this.getEvents();
  }

  async DeleteEvent(event: Event) {
    await fetch(this.url + event.id + "/", {
      method: "delete",
    });
  }
}
