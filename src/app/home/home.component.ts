import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public quote:object;
	public author:object;


  	constructor(private _quoteService:QuoteService) { }

	ngOnInit() {
		this.getQuote();
 	}
 
	getQuote() {
		this._quoteService.getQuote().subscribe(
			data => { 
				this.quote = data.quote;
				this.author = data.author;
			},
			err => console.error(err),
			() => console.log('done loading quote'));
	}

}
