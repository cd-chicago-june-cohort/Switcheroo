import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  buttons = ['OFF', 'ON']

  setting = [false, true]

  switch(i) {
    if(this.buttons[i] === "OFF") {
      this.buttons[i] = "ON"
      this.setting[i] = true
    } else {
      this.buttons[i] = "OFF"
      this.setting[i] = false
    }
  }
}
