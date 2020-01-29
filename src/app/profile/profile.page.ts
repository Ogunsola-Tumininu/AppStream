import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  slideopts = {
    initialSlide: 1,
    slidesPerView: 3,
    speed: 400,
    autoplay: {
      delay: 2500
    },
    loop: true
  };

  constructor(public navCtrl: NavController,  public toastCtrl: ToastController) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile');
  }


  async showToast(positio) {
    const toast = await this.toastCtrl.create({
      message: 'Mmmm, I think I like it',
      duration: 2000,
      position: positio
    });
    toast.present();
  }

}
