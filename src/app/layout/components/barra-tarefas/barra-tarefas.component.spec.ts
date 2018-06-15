import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraTarefasComponent } from './barra-tarefas.component';

describe('BarraTarefasComponent', () => {
  let component: BarraTarefasComponent;
  let fixture: ComponentFixture<BarraTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
