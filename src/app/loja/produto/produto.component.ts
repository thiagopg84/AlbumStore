import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() receivedProducts;
  @Output() emitAddedProducts: EventEmitter<Album[]> = new EventEmitter<Album[]>();
  
  arrayOfProducts: Album[] = [ ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  adicionaProduto(album: Album) {
    if (!this.arrayOfProducts.includes(album)) {
      if (album.addAlbum() == false) {
        console.log(`ADICIONANDO "${album.nome.toUpperCase()} - ${album.titulo.toUpperCase()}" AO CARRINHO!`);
        this.arrayOfProducts.push(album)
      }
    } else {
      let indexOfProduct = this.arrayOfProducts.indexOf(album);
      console.log(`REMOVENDO "${album.nome.toUpperCase()} - ${album.titulo.toUpperCase()}" DO CARRINHO!`);
      this.arrayOfProducts.splice(indexOfProduct, 1);
      album.addAlbum();
    }
    console.log(this.arrayOfProducts);
    this.emitAddedProducts.emit(this.arrayOfProducts);
  }
}
