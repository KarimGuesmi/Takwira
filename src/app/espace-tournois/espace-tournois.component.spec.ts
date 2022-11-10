import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceTournoisComponent } from './espace-tournois.component';

describe('EspaceTournoisComponent', () => {
  let component: EspaceTournoisComponent;
  let fixture: ComponentFixture<EspaceTournoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceTournoisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceTournoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
