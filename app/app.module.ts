import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import {
    EventsListComponent,
    CreateEventComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    EventService,
    EventRouteActivator,
    EventListResolver,
    DurationPipe
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './nav/navbar.component'
import { Error404Component } from './errors/404.component'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { appRoutes } from './routes'
import { AuthService} from './user/auth.service'

declare let toastr: Toastr;

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        DurationPipe],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        EventListResolver,
        AuthService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

//it would be better to move it to other file
function checkDirtyState(component: CreateEventComponent) { //first param of canDeactivate guard is component itself
    if (component.isDirty) {
        return window.confirm('You have not saved this event, do you realy want to cancel?');
    }

    return true;
}