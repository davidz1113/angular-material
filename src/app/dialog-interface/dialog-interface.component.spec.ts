import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInterfaceComponent } from './dialog-interface.component';

describe('DialogInterfaceComponent', () => {
  let component: DialogInterfaceComponent;
  let fixture: ComponentFixture<DialogInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
