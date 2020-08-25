import { Component, OnInit, Input } from '@angular/core';
import { Album } from './album.model';

@Component({
    selector: 'app-loja',
    templateUrl: './loja.component.html',
    styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

    produtosNoCarrinho: Album[] = [ ];

    produtos: Album[] = [
        new Album(30.99, "../../assets/images/01.jpg", "Slayer", "Reign In Blood"),
        new Album(32.99, "../../assets/images/02.jpg", "Sepultura", "Arise"),
        new Album(31.99, "../../assets/images/03.jpg", "Sodom", "Agent Orange"),
        new Album(33.99, "../../assets/images/04.jpg", "Destruction", "Infernal Overkill"),
        new Album(35.99, "../../assets/images/05.jpg", "Megadeth", "Rust In Peace"),
        new Album(37.99, "../../assets/images/06.jpg", "Testament", "The Legacy"),
        new Album(33.99, "../../assets/images/07.jpg", "Overkill", "The Years of Decay"),
        new Album(30.50, "../../assets/images/08.jpg", "Forbidden", "Forbidden Evil"),
        new Album(32.75, "../../assets/images/09.jpg", "Exhorder", "Slaughter In The Vatican"),
        new Album(39.99, "../../assets/images/10.jpg", "Demolition Hammer", "Tortured Existence"),
        new Album(39.98, "../../assets/images/11.jpg", "XentriX", "Shattered Existence"),
        new Album(30.99, "../../assets/images/12.jpg", "Municipal Waste", "The Art of Partying"),
        new Album(25.99, "../../assets/images/13.jpg", "DRI", "Thrash Zone"),
        new Album(47.99, "../../assets/images/14.jpg", "Violator", "Scenarios of Brutality"),
        new Album(27.99, "../../assets/images/15.jpg", "Tankard", "The Morning After"),
        new Album(23.99, "../../assets/images/16.jpg", "Toxic Holocaust", "An Overdose of Death"),
        new Album(37.99, "../../assets/images/17.jpg", "Razor", "Violent Restitution"),
        new Album(27.59, "../../assets/images/18.jpg", "Havok", "Time Is Up"),
        new Album(27.00, "../../assets/images/19.jpg", "Exumer", "Possessed By Fire"),
        new Album(22.25, "../../assets/images/20.jpg", "Onslaught", "The Force")
    ]

    constructor() { 
    }

    ngOnInit(): void {
    }

    pullNumber($event) {
        this.produtosNoCarrinho = $event;
    }
}