import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabupdateComponent } from './cabupdate.component';

describe('CabupdateComponent', () => {
  let component: CabupdateComponent;
  let fixture: ComponentFixture<CabupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
