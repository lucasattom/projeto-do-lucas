import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ConteudoState, Conteudo } from '../conteudo.state'
import { ConteudoService } from '../conteudo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.css']
})
export class EstadoComponent implements OnInit {
  nome: string;
  sobrenome: string;
  @Select(ConteudoState) conteudo$: Observable<Conteudo>;

  constructor(private store: Store, private conteudoService: ConteudoService) {
    
  }

  ngOnInit(): void {
    this.conteudo$.subscribe(state => this.nome = state.nome);
  }

  adicionaNome(valor: string) {
    this.conteudoService.addNome(valor);
    
  }

}
