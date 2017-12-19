import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../quote.service';

// import fade in animation
import { fadeAnimation } from '../_animations/index';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	// make fade in animation available to this component
	animations: [fadeAnimation],
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public quote:string;
	public author:string;
	public fade = '';


  	constructor(private _quoteService:QuoteService) { }

	ngOnInit() {
		this.fade = 'fadeIn';
		this.getQuote();
 	}
 
	getQuote() {
		this.fade = '';
		this._quoteService.getQuote().subscribe(
			data => { 
				this.quote = data.quote;
				this.author = data.author;
				this.fade = 'fadeIn';
			},
			err => console.error(err),
			() => console.log('done loading quote'));
	}

}
