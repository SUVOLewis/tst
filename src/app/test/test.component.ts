import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
status = 'yes';
butStat = true;

  constructor() { }

  ngOnInit() {
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
}
