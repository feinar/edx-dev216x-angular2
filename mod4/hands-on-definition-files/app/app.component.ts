import {Component} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent {
    public currentDate : string;
    public sinceDate : string;
    constructor() {
        this.currentDate = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
        this.sinceDate = moment('2016-01-01', 'YYYY-MM-DD').fromNow();
    }
}