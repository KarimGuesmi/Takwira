import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatejoueurComponent } from './updatejoueur.component';

describe('UpdatejoueurComponent', () => {
  let component: UpdatejoueurComponent;
  let fixture: ComponentFixture<UpdatejoueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatejoueurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatejoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
