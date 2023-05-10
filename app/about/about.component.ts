import { Component, OnInit } from '@angular/core';
// .......................
import * as $ from "jquery";
import Typed from 'typed.js'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var typed = new Typed('.element', {
      // Waits 1000ms after typing "First"
      strings: [" About NOXE "],//دى الاسترنجات اللى هيكتبها ويبدل مابينهم
      loop: true, typeSpeed: 70, backSpeed: 70, shuffle: true,// ده عشان الوقت اللى هيكتب فيه الاسترنج
  });

  var typed2 = new Typed('.element2', {
    // Waits 1000ms after typing "First"
    strings: [" Advantage"],//دى الاسترنجات اللى هيكتبها ويبدل مابينهم
    loop: true, typeSpeed: 70, backSpeed: 70, shuffle: true,// ده عشان الوقت اللى هيكتب فيه الاسترنج
});
  }

}
