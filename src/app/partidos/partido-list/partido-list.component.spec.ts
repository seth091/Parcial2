/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { SeguroListComponent } from './seguro-list.component';
import { HttpClientModule } from '@angular/common/http';
//import { Editorial } from 'src/app/editorial/editorial';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';
import { PartidoDetail } from '../partido-detail';



describe('PartidoListComponent', () => {
  let component: PartidoListComponent;
  let fixture: ComponentFixture<PartidoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PartidoListComponent ],
      providers: [ PartidoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoListComponent);
    component = fixture.componentInstance;


    for(let i = 0; i < 10; i++) {
      const partido = new PartidoDetail(

        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),

    //    faker.date.past(),
      );
      component.partidos.push(partido);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {


   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.partidos[0].id.toString());

 });

 it('should have created 10 objects to list ', () => {

  for(let i = 0; i < 10; i++) {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.partidos[0].id.toString());
  }
 });


});
