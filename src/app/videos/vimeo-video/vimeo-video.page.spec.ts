import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VimeoVideoPage } from './vimeo-video.page';

describe('VimeoVideoPage', () => {
  let component: VimeoVideoPage;
  let fixture: ComponentFixture<VimeoVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VimeoVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VimeoVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
