import { Component, OnInit } from '@angular/core';
import { Destination } from '../destination'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  destination: Destination = {
    id: 1,
    name: 'The Shetland Isles'
  };

  constructor() { }

  ngOnInit() {
  }

}
