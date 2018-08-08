import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map , debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) {
    console.log('DataService Connected');
  }

  getPosts() {
    const obs = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

    const subscription = obs.pipe(debounceTime(300)).subscribe((response) => {
        console.log(response);
        debugger;
    });

    subscription.unsubscribe();

    const obs2 = obs.pipe(map(res => res.json()));

    return obs2;
  }
}
