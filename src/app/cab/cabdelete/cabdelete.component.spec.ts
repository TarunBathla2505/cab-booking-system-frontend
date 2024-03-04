import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabdeleteComponent } from './cabdelete.component';

describe('CabdeleteComponent', () => {
  let component: CabdeleteComponent;
  let fixture: ComponentFixture<CabdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CabdeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
