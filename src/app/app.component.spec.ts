import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as main action button title 'Click to see the Peaks And Valleys'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.mainActionButtonTitle).toEqual('Click to see the Peaks And Valleys');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content .mainBtn').textContent).toContain('Click to see the Peaks And Valleys');
  });

  it('should render Peaks', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.peaks').textContent).toContain('Print Peaks');
  });

  it('should render Valleys', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.valleys').textContent).toContain('Print Valleys');
  });
    
  it('should provide an array to build a castle and get peaks and valleys totals', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let buildCastles = spyOn(app, 'buildACastle');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    compiled.querySelector('.buildACastle').click();
    expect(buildCastles).toHaveBeenCalled();
  });

  it('should create new Valleys', () => {
    const arr = [86, 4, 53, 46, 24, 2, 70, 44, 95, 34];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.checkValleys(arr, 0, app.valleysList);
    expect(app.valleysList.length).toBeGreaterThan(0);
  });

  it('should create new Peaks', () => {
    const arr = [86, 4, 53, 46, 24, 2, 70, 44, 95, 34];
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.checkValleys(arr, 0, app.peaksList);
    expect(app.peaksList.length).toBeGreaterThan(0);
  });
  
});
