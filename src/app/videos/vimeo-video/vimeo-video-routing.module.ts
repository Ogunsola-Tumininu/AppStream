import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VimeoVideoPage } from './vimeo-video.page';

const routes: Routes = [
  {
    path: '',
    component: VimeoVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VimeoVideoPageRoutingModule {}
