import {Component} from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: 'app/app.component.html',
  directives:  []
})
export class AppComponent {
  public showPanel : boolean = true;
  public getStyles() {
    return {
        'font-style': 'italic',
        'font-weight': 'bold'
    }
  }
  public getClasses() {
    return {
        'highlight': true,
        'strike': false
    }
  }

}