import { Component, OnInit } from '@angular/core';
import { Result } from '../interfaces/rickAndMortyResp.interface';
import { RandmService } from '../services/randm.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public datos!: Result[];
  public paginas: any;

  constructor(
    private randmService: RandmService
  ) { }

  ngOnInit(): void {
    this.randmService.getDatosRickAndMorty( 1 ).subscribe(resp => {
      this.datos = resp.results;
      let miarray = new Array(resp.info.pages);
      this.paginas = miarray;
    });
  }

  getDatosPorPagina( pagina: number) {
    this.randmService.getDatosRickAndMorty( pagina ).subscribe(resp => {
      this.datos = resp.results;
    });
  }

}
