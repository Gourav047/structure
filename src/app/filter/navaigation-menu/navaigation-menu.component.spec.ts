import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavaigationMenuComponent } from './navaigation-menu.component';

describe('NavaigationMenuComponent', () => {
  let component: NavaigationMenuComponent;
  let fixture: ComponentFixture<NavaigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavaigationMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavaigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
