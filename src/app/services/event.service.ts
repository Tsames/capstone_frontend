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

  // method to get todos
  async getEvents() {
    const response = await fetch(this.url);
    const data = await response.json();
    this.events = data;
    return data;
  }
  // method to create todos
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

  // method to update todos
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
  // method to delete todos
  async DeleteEvent(event: Event) {
    await fetch(this.url + event.id + "/", {
      method: "delete",
    });

    return this.getEvents();
  }
}
