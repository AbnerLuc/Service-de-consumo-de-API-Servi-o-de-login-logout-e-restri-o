import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/produto.service';
@Component({
    selector: 'app-cadastro-produto',
    templateUrl: './cadastro-produto.component.html',
    styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
    public produto: produto = new produto(0, "", "", "", 0);
    constructor(private _produtoService: ProdutoService, private router: Router) { }
    ngOnInit(): void {
    }
    cadastrar() {
        this._produtoService.cadastrarProduto(this.produto).subscribe(
            Produto => {
                this.produto = new produto(0, "", "", "", 0);
                alert("Cadastro Efetuado com Sucesso")
            },
            err => {
                alert("erro ao cadastrar")
            }
        );
        this.router.navigate(["/restrito/lista"]);
    }
}