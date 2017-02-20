import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapComponent } from './map.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapService } from './map.service';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCOlezvqr76PGRMlaULI6HvOVK1nlJQ6as"
        })
    ],
    providers:[ MapService ],
    declarations:[ MapComponent ]
})
export class MapModule{

}