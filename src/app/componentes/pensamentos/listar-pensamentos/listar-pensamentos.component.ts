import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  ListarPensamentos=[
    {
      conteudo:'timtim',
      autoria:'topogigio',
      modelo:'modelo3'
    },

    {
      conteudo:'rarara',
      autoria:'malaqui',
      modelo:'modelo2'
    },

    {
      conteudo:'rararararararararararararararararararararararararararararararararararararararararararararararararararararararararararararararararararararararrarararararararararararararararararararararararararararararararararararararararararaararararararararararararararararararara',
      autoria:'malaqui',
      modelo:'modelo2'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
