import { BarraTarefasService } from './../../shared/services/barra-tarefas.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ItemBarraInterface } from '../components/barra-tarefas/item-barra/item-barra.component';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor(private barraTarefasService: BarraTarefasService) {}

    ngOnInit() {
        console.log('TESTE TESTE', this.barraTarefasService.testeBarra);
    }

    addItemBarra() {
        const turma = Math.random().toString().substr(3, 3);
        const item: ItemBarraInterface = {
            titulo: 'Teste Add ',
            url: `/turma/${turma}`,
            icon: 'home',
            subtitulo: `Turma ${turma}`
        };
        this.barraTarefasService.addItem(item);
    }

    abreTable() {
        const item: ItemBarraInterface = {
            titulo: 'Tables',
            url: '/tables',
            icon: 'table_chart',
            subtitulo: `Exemplos de tabelas com filtro por conteúdo`
        };
        this.barraTarefasService.addItem(item);
    }

    mock() {
        this.barraTarefasService.mocka();
    }
}
