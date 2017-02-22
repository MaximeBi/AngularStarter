import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

import { Hike } from './hike';

@Injectable(
)
export class HikeService{

  private data: any;
  private observable: Observable<any>;

  constructor(private _http:Http){

  }

  getHikesFromApi(){
    return this._http.get('./app/api/hikes.json')
        .do(x => console.log(x))
        .map(hikes => hikes.json())
  }

  getHikesFromApiWithCache(){
    if(this.data){
      return Observable.of(this.data);
    } else if(this.observable){
      return this.observable;
    } else{
      this.observable = this._http.get('./app/api/hikes.json')
                                  .map(response => {
                                    this.observable = null;
                                    this.data = response.json();
                                    return this.data;
                                  })
                                  .catch(error =>{
                                    return Observable.throw("Message erreur");
                                  })
      return this.observable;
    }
  }

}
