import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipoDetailComponent } from './equipo-detail.component';
import { faker } from '@faker-js/faker';
import { EquipoDetail } from '../equipo-detail';


describe('EquipoDetailComponent', () => {
  let component: EquipoDetailComponent;
  let fixture: ComponentFixture<EquipoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoDetailComponent);
    component = fixture.componentInstance;



    component.equipoDetail= new EquipoDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.datatype.number(),

      );


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should have a p.h3.p-3 element with equipoDetail.letra', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.equipoDetail.letra);
  });

  it('should have a p.h3.p-3  element with src= equipoDetail.draws', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      component.equipoDetail.draws
    );
  });


  it('should have a p.h3.p-3  element with alt= equipoDetail.games_played', () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.equipoDetail.games_played
    );
  });



  it('should have one dd tag for component.equipoDetail.goal_differential', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'goal_differential';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.goal_differential);
  });


  it('should have one dd tag for component.equipoDetail.goal_against', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'goal_against';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.goals_against);
  });

});
