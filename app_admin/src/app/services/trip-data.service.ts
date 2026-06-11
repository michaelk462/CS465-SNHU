import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';

@Injectable({
    providedIn: 'root'
})

export class TripDataService {

    private url = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    getTrips(): Observable<Trip[]> {
        return this.http.get<Trip[]>(`${this.url}/trips`);
    }

    addTrip(formData: Trip): Observable<Trip[]> {
        return this.http.post<Trip[]>(`${this.url}/trips`, formData);
    }

    getTrip(tripCode: string): Observable<Trip[]> {
        return this.http.get<Trip[]>(`${this.url}/trips/${tripCode}`);
    }

    updateTrip(formData: Trip): Observable<Trip[]> {
        return this.http.put<Trip[]>(`${this.url}/trips/${formData.code}`, formData);
    }
}