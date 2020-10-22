export class Album {
    noCarrinho: boolean = false;

    addAlbum() {
        if (this.noCarrinho) {
            this.noCarrinho = false;
            return true
        } else {
            this.noCarrinho = true;
            return false
        }
    }
    
    constructor(public preco: number, public imagem: string, public nome: string, public titulo: string ) {
    }
}
