import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
    providedIn: 'root'
})

export class TripDataService {
    [x: string]: any;
    tripDataService(value: any) {
      throw new Error('Method not implemented.');
    }
    
    constructor(private http: HttpClient) {}

    getTrips() : Observable<Trip[]> {
        let url = 'http://localhost:3000/api/trips';

        return this.http.get<Trip[]>(url)
    }
}