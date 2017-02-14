import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Hike } from './hike';

@Injectable(
)
export class HikeService{

  constructor(private _http:Http){

  }

  getHikesFromApi(){
    return this._http.get('./app/api/hikes.json')
        .do(x => console.log(x))
        .map(hikes => hikes.json())
  }

}
