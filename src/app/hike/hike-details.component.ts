import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: '',
  templateUrl: 'hike-detail.component.html'
})
export class HikeDetailsComponent implements OnInit{

  title: string;

  constructor(private _route: ActivatedRoute, private _router: Router){

  }

  ngOnInit(){
    let id = this._route.snapshot.params['name'];
    this.title = `Détails de la randonée ${id}`;
  }

  goBack(){
    console.log("Click on me !");
    this._router.navigate(['/hikes']);
  }


}
