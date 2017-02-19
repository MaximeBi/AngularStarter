import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hike } from './hike';


@Component({
    moduleId: module.id,
    selector: "hike-summary",
    templateUrl: "hike-summary.component.html"
})
export class HikeSummaryComponent{
    @Input() hike: Hike;
    @Output() addHikeAsFavourite = new EventEmitter<Hike>();

    toggleAsTodoHike(isAdded: any){
        if(isAdded){
            this.addHikeAsFavourite.emit(this.hike);
        }
    }
}