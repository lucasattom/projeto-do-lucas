import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ConteudoService } from '../conteudo.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {
  dados: string;
  info: string;

  constructor(private authService: AuthService, private conteudoService: ConteudoService) { }

  ngOnInit(): void {
    this.dados = this.authService.userID;
  }

  atualizarInfo(input: string) {
    console.log(input);
    this.info = input;
    this.conteudoService.atualizarDados(input);
  }

}
