import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLibraryComponent } from './basic-library.component';

describe('BasicLibraryComponent', () => {
  let component: BasicLibraryComponent;
  let fixture: ComponentFixture<BasicLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
