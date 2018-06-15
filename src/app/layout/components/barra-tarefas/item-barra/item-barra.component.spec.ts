import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBarraComponent } from './item-barra.component';

describe('ItemBarraComponent', () => {
  let component: ItemBarraComponent;
  let fixture: ComponentFixture<ItemBarraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemBarraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
