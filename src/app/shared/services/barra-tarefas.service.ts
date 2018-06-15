import { Router } from '@angular/router';
import { ItemBarraInterface } from './../../layout/components/barra-tarefas/item-barra/item-barra.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BarraTarefasService {
    itensBarra: ItemBarraInterface[];
    public testeBarra = 'TESTE---';
    constructor(private router: Router) {}

    mocka() {
        const itens = new Array<ItemBarraInterface>();
        itens.push({
            titulo: 'Forms',
            url: '/forms',
            icon: 'input'
        });
        itens.push({
            titulo: 'Grids',
            subtitulo: 'Tela de exemplos de Grids',
            url: '/grid',
            icon: 'grid_on'
        });
        itens.push({
            titulo: 'Charts',
            subtitulo: 'Gráficos maneiros',
            icon: 'bar_chart',
            url: '/charts'
        });
        itens.push({
            titulo: 'Dashboard',
            subtitulo: 'Subtitulo',
            url: '/dashboard',
            icon: 'school'
        });
        localStorage.removeItem('items');
        localStorage.setItem('items', JSON.stringify(itens));
        this.carregaItensBarra();
    }

    addItem(item: ItemBarraInterface) {
        this.itensBarra.push(item);
        localStorage.setItem('items', JSON.stringify(this.itensBarra));
        this.carregaItensBarra();
        this.router.navigate([item.url]);
    }

    carregaItensBarra() {
        this.itensBarra = JSON.parse(localStorage.getItem('items'));
        console.log(this.itensBarra);
    }
}
