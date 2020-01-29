import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsPage } from './news.page';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
// import { IonicHeaderParallaxModule } from '../../../projects/ionic-header-parallax/src'; // <- Uncoment this to edit library

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonicHeaderParallaxModule,
    FontAwesomeModule,
    RouterModule.forChild([{ path: '', component: NewsPage }])
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
