import { Component } from '@angular/core';

import { Hike } from './hike';
import { HikeService } from './hike-list.service';


@Component({
  moduleId: module.id,
  selector: 'hike-list',
  templateUrl: 'hike-list.component.html'
})
export class HikeListComponent{
  hikes: Hike[];
  searchTerm: string;

  constructor(private _hikeService: HikeService){

  }

  ngOnInit(){
    //this.hikes = this._hikeService.getHikesFromApi();
    this._hikeService.getHikesFromApi()
                        .subscribe(
                          res => this.hikes = res,
                          err => console.log(err.status)
                          );
    console.log(this.hikes);
  }
}
