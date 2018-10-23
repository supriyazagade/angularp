import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	public data:any;

  constructor(private http:Http) { }

  ngOnInit() {

  	this.http.get("http://localhost:9090/posts").subscribe(
  			(response)=> {
  				this.data=response.json();
  				console.log(this.data);
  			},
  			(error)=> {
  				console.log(error);
  			}
  		)
  }

}
