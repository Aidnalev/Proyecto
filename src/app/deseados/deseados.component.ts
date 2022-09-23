import { Component } from '@angular/core';
import { DeseadoService } from '../deseado.service';

@Component({
  selector: 'app-deseados',
  templateUrl: './deseados.component.html',
  styleUrls: ['./deseados.component.css'],
})
export class DeseadosComponent {
  items = this.deseadoService.getItems();

  constructor(private deseadoService: DeseadoService) {}
}
