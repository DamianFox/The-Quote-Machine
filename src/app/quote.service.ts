import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
 
// const httpOptions = {
//     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable()
export class QuoteService {

	private quoteEndpoint:string = "https://talaikis.com/api/quotes/random/";

	constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getQuote(): Observable<any> {
        return this.http.get(this.quoteEndpoint);
    }

}