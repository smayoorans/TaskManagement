import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskComponent } from './list-task.component';

describe('ListTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
