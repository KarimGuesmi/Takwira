import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursPasseursComponent } from './meilleurs-passeurs.component';

describe('MeilleursPasseursComponent', () => {
  let component: MeilleursPasseursComponent;
  let fixture: ComponentFixture<MeilleursPasseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeilleursPasseursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeilleursPasseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
