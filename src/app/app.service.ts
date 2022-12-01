import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AppService {
    constructor(
        private httpClient: HttpClient
    ){

    }

    getTags(): Observable<string[]>{
        return this.httpClient.get<string[]>('https://http.dog/')
    }
}