import { Component, OnInit } from '@angular/core';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit() {
    this.tripService.getTrips().subscribe((data) => {
      this.trips = data;
    });
  }
}
