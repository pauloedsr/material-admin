import { BarraTarefasService } from './../../../shared/services/barra-tarefas.service';
import { ItemBarraInterface } from './item-barra/item-barra.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-barra-tarefas',
    templateUrl: './barra-tarefas.component.html',
    styleUrls: ['./barra-tarefas.component.scss']
})
export class BarraTarefasComponent implements OnInit {
    itensBarra: ItemBarraInterface[];
    constructor(private router: Router, protected service: BarraTarefasService) {}

    ngOnInit() {
        this.service.carregaItensBarra();
    }

    /**
     * Mock dados
     */
    add() {
        this.service.mocka();
    }

    close(itemBarra: ItemBarraInterface) {
        this.service.testeBarra = itemBarra.titulo;

        this.service.itensBarra.splice(this.service.itensBarra.indexOf(this.getItemBarra(itemBarra.id)), 1);
        localStorage.setItem('items', JSON.stringify(this.service.itensBarra));
        this.service.carregaItensBarra();

        if (itemBarra.ativo) {
            const ultimoItem = this.service.itensBarra[this.service.itensBarra.length - 1];
            console.log('ULTIMA ABA', ultimoItem);
            if (ultimoItem) {
                this.router.navigate([ultimoItem.url]);
            } else {
                this.router.navigate(['/']);
            }
        }
    }

    getItemBarra(id: string) {
        return this.service.itensBarra.find((value) => value.id === id);
    }

    hide() {
        document.querySelector('footer').classList.toggle('hide-footer');
        document.querySelector('#showFooter').classList.toggle('hide-footer');
    }

    listItensBarra() {
        return this.service.itensBarra;
    }
}
