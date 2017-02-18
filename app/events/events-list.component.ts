import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { IEvent } from './shared/event.model'

@Component({    
    templateUrl: 'app/events/events-list.component.html'
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, 
        private toastrService: ToastrService,
        private route: ActivatedRoute) {        
    };

    ngOnInit() {        
        this.events = this.route.snapshot.data['events'];
        //this.eventService.getEvents().subscribe(events => this.events = events);        
    };

    handleEventClicked(data) {
        console.log('received ', data);
    };

    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    };
}