import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursButteursComponent } from './meilleurs-butteurs.component';

describe('MeilleursButteursComponent', () => {
  let component: MeilleursButteursComponent;
  let fixture: ComponentFixture<MeilleursButteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursButteursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeilleursButteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
