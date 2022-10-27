import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJferreirazComponent } from './user-jferreiraz.component';

describe('UserJferreirazComponent', () => {
  let component: UserJferreirazComponent;
  let fixture: ComponentFixture<UserJferreirazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserJferreirazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserJferreirazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
