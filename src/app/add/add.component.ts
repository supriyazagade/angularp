import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }

  addEntry(title,author) {
  	this.http.post("http://localhost:9090/posts",{title:title,author:author}).subscribe(
  			(response)=>{
  				console.log(response.json());
  			},
  			(error)=>{
  				console.log(error);
  			}
  		)
  }
}
