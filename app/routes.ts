import { Routes } from '@angular/router'

import {                
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import { Error404Component } from './errors/404.component'

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] }, //we can also use function instead of service
    { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },    
    { path: '', redirectTo: '/events', pathMatch: 'full' }, //dopasowanie całej ścieżki
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
];