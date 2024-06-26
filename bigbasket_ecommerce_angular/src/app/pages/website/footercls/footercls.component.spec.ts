import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterclsComponent } from './footercls.component';

describe('FooterclsComponent', () => {
  let component: FooterclsComponent;
  let fixture: ComponentFixture<FooterclsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterclsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterclsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
