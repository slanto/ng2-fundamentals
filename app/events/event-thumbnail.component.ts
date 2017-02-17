import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles: [`
        .green { color: #003300 !important; }
        .bold { font-weight: bold; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event: any
    @Output() eventClick = new EventEmitter();
    someProperty: any = "some value";

    handleClickMe() {
        this.eventClick.emit(this.event.name);
    };

    logFoo() {
        console.log('log foo');
    };

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return { green: isEarlyStart, bold: isEarlyStart };
    };

    getStartTimeStyle() {
       if (this.event && this.event.time === '8:00 am') {
           return { color: '#003300', 'font-weight': 'bold' }; 
       }
       return {};
    };
}