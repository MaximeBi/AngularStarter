import { Component, ApplicationRef } from '@angular/core';

import { MapService } from './map.service';

@Component({
    moduleId: module.id,
    selector: 'hike-map',
    templateUrl: 'map.component.html',
    styleUrls: ['map.component.css']
})
export class MapComponent{
    lat: number = 49.301469;
    lng: number = 2.648198;

    droppedLat: number;
    droppedLng: number;

    markerWasDroppped: boolean = false;

    markers: marker[] = [];

    startingPoint: string = "6 rue de l'étamoire, 53940 Le Genest Saint Isle, France";

    constructor(private _mapService: MapService, private _applicationRef: ApplicationRef){

    }

    onCoordMarkerDropped(event: any){

        this.markerWasDroppped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);

    }

    geocode(){

        this._mapService.getLatLng(this.startingPoint)
                        .subscribe(
                            (data: any) => this.placeMarkerOnGeocodedPlace(data),
                            (err: any) => console.log(err)
                        );
    }

    placeMarkerOnGeocodedPlace(location: any){

        let marker = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng(),
            title: "",
            draggable: true
        }

        this.markers.push(marker);
        this._applicationRef.tick();
    }
}

interface marker {
    lat: number;
    lng: number;
    title?: string;
    icon?: string;
    draggable: boolean;
}