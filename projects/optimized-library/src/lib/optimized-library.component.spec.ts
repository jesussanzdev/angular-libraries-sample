import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizedLibraryComponent } from './optimized-library.component';

describe('OptimizedLibraryComponent', () => {
  let component: OptimizedLibraryComponent;
  let fixture: ComponentFixture<OptimizedLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizedLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimizedLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
