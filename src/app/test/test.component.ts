import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	status = 'yes';
	butStat = true;
	timermessageReg = 'Nothing here!';
	timermessageArrow = 'Nothing here!';
	data = null;

	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getPosts().subscribe((data) => {
			this.data = data;
		});
	}

	statChange() {
		this.butStat = !this.butStat;
		if (this.butStat) {
			this.status = 'yes';
			console.log('changed to yes');
		} else {
			this.status = 'no';
			console.log('changed to no');
		}
	}

	startTimeoutReg() {
		console.log('test : ' + this.timermessageReg);

		this.timermessageReg = 'This message will disappear in 5 seconds...';

		console.log('test : ' + this.timermessageReg);

		setTimeout(function() {

			// debugger;

			console.log(this);

			this.timermessageReg = 'Still nothing here!';

			console.log('test : ' + this.timermessageReg);
		}, 5000);
	}

	startTimeoutArrow() {
		console.log('test : ' + this.timermessageArrow);

		this.timermessageArrow = 'This message will disappear in 5 seconds...';

		console.log('test : ' + this.timermessageArrow);

		setTimeout(() => {

			// debugger;

			console.log(this);

			this.timermessageArrow = 'Still nothing here!';

			console.log('test : ' + this.timermessageArrow);
		}, 5000);
	}
}

	interface HttpReq {
		id: number;
		title: string;
		body: string;
		userID: number;
	}
