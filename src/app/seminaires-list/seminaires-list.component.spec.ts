import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminairesListComponent } from './seminaires-list.component';

describe('SeminairesListComponent', () => {
  let component: SeminairesListComponent;
  let fixture: ComponentFixture<SeminairesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeminairesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeminairesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
