import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSiteComponent } from './map-site.component';

describe('MapSiteComponent', () => {
  let component: MapSiteComponent;
  let fixture: ComponentFixture<MapSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
