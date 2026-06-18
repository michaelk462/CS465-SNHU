import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripDataService } from './trip-data.service';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    authResp: AuthResponse = new AuthResponse();

    constructor(
        @Inject(BROWSER_STORAGE) private storage: Storage,
        private tripDataService: TripDataService
    ) {}

    //****Token Storage****
    public getToken(): string {
        const out = this.storage.getItem('travlr-token');
        return out ?? '';
    }

    public saveToken(token: string): void {
        this.storage.setItem('travlr-token', token);
    }

    public logout(): void {
        this.storage.removeItem('travlr-token');
    }

    //****Auth State****
    public isLoggedIn(): boolean {
        const token: string = this.getToken();
        if (token) {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp > (Date.now() / 1000);
        }
        return false;
    }

    public getCurrentUser(): User {
        const token: string = this.getToken();
        const {email, name} = JSON.parse(atob(token.split('.')[1]));
        return {email, name} as User;
    }

    //****Login / Register****
    public login(user: User, passwd: string): void {
        this.tripDataService.login(user, passwd).subscribe({
            next: (value: any) => {
                if (value) {
                    this.authResp = value;
                    this.saveToken(this.authResp.token);
                }
            },
            error: (error: any) => {
                console.log('Login error ' + error);
            }
        });
    }

    public register(user: User, passwd: string): void {
        this.tripDataService.register(user, passwd).subscribe({
            next: (value: any) => {
                if (value) {
                    this.authResp = value;
                    this.saveToken(this.authResp.token);
                }
            },
            error: (error: any) => {
                console.log('Register error ' + error);
            }
        });
    }
}
