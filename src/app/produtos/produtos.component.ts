import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  casacos:any=[
    {
      imagem:'assets/casacos/casacos1.jpg',
      descricao:'Casaco 1',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/casacos/casacos2.jpg',
      descricao:'Casaco 2',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/casacos/casacos3.png',
      descricao:'Casaco 3',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/casacos/casacos4.png',
      descricao:'Casaco 4',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/casacos/casacos4.png',
      descricao:'Casaco 5',
      valor: 'R$49,99'
    }
  ]

  camisas:any=[
    {
      imagem:'assets/camisas/camisa1.jpg',
      descricao:'Camisa 1',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/camisas/camisa2.jpg',
      descricao:'Camisa 2',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/camisas/camisa3.jpg',
      descricao:'Camisa 3',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/camisas/camisa4.jpg',
      descricao:'Camisa 4',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/camisas/camisa5.jpg',
      descricao:'Camisa 5',
      valor: 'R$49,99'
    }
  ]

  calcas:any=[
    {
      imagem:'assets/calças/calca1.jpg',
      descricao:'Calça 1',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/calças/calca2.jpg',
      descricao:'Calça 2',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/calças/calca3.jpg',
      descricao:'Calça 3',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/calças/calca1.jpg',
      descricao:'Calça 4',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/calças/calca2.jpg',
      descricao:'Calça 5',
      valor: 'R$49,99'
    }
  ]

  bermudas:any=[
    {
      imagem:'assets/bermudas/bermudas1.jpg',
      descricao:'Bermuda 1',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/bermudas/bermudas2.jpg',
      descricao:'Bermuda 2',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/bermudas/bermudas3.jpg',
      descricao:'Bermuda 3',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/bermudas/bermudas4.jpg',
      descricao:'Bermuda 4',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/bermudas/bermudas5.jpg',
      descricao:'Bermuda 5',
      valor: 'R$49,99'
    }
  ]

  tenis:any=[
    {
      imagem:'assets/tenis/tenis1.jpg',
      descricao:'Tênis 1',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/tenis/tenis2.jpg',
      descricao:'Tênis 2',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/tenis/tenis3.jpg',
      descricao:'Tênis 3',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/tenis/tenis4.jpg',
      descricao:'Tênis 4',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/tenis/tenis5.jpg',
      descricao:'Tênis 5',
      valor: 'R$49,99'
    }
  ]

  roupasIntimas:any=[
    {
      imagem:'assets/roupasIntimas/cueca1.jpg',
      descricao:'Cueca 1',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/roupasIntimas/cueca2.jpg',
      descricao:'Cueca 2',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/roupasIntimas/cueca3.jpg',
      descricao:'Cueca 3',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/roupasIntimas/cueca4.jpg',
      descricao:'Cueca 4',
      valor: 'R$49,99'
    },

    {
      imagem:'assets/roupasIntimas/cueca5.jpg',
      descricao:'Cueca 5',
      valor: 'R$49,99'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
