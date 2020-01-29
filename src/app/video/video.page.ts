import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'video.page.html',
  styleUrls: ['video.page.scss']
})
export class VideoPage {

  constructor(public navCtrl: NavController,
              private router: Router) {}

  playyoutube() {
    this.router.navigate(['/youtube']);
    // console.log('you click me');
  }

  playvimeo() {
    this.router.navigate(['/vimeo']);
    // console.log('you click me');
  }

}
