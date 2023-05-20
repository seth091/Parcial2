import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';
import { PartidoDetail } from '../partido-detail';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css']
})
export class PartidoListComponent implements OnInit {


  partidos: Array<PartidoDetail> = [];
  selected: Boolean = false;
  selectedPartido!: PartidoDetail;

  constructor(private partidoService: PartidoService) { }

  getseguros(): void {
    this.partidoService.getPartidos().subscribe((partidos) => {
      this.partidos = partidos;
    });
  }

  onSelected(partido: PartidoDetail): void {

    this.selected = true;
    this.selectedPartido = partido;
  }


  ngOnInit() {
    this.getPartidos();
  }

}

