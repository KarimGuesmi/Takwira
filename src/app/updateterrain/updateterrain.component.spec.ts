import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateterrainComponent } from './updateterrain.component';

describe('UpdateterrainComponent', () => {
  let component: UpdateterrainComponent;
  let fixture: ComponentFixture<UpdateterrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateterrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateterrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
