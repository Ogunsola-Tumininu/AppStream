import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VimeoVideoPageRoutingModule } from './vimeo-video-routing.module';

import { VimeoVideoPage } from './vimeo-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VimeoVideoPageRoutingModule
  ],
  declarations: [VimeoVideoPage]
})
export class VimeoVideoPageModule {}
