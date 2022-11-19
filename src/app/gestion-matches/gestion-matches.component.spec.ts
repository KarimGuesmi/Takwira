import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatchesComponent } from './gestion-matches.component';

describe('GestionMatchesComponent', () => {
  let component: GestionMatchesComponent;
  let fixture: ComponentFixture<GestionMatchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMatchesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
