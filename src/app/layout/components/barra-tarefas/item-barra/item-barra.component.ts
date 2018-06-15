import { Router } from '@angular/router';
import { Component, OnInit, Input, EventEmitter, Output, Renderer2} from '@angular/core';

@Component({
    selector: 'app-item-barra',
    templateUrl: './item-barra.component.html',
    styleUrls: ['./item-barra.component.scss']
})
export class ItemBarraComponent implements OnInit {
    @Input() item: ItemBarraInterface;
    @Output() close = new EventEmitter<ItemBarraInterface>();
    private isClose = false;
    private itensBarra: ItemBarraInterface[];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.item.id = btoa(Math.random().toString()).substring(0, 12);
        this.itensBarra = JSON.parse(localStorage.getItem('items'));
    }

    btnClose() {
        this.item.ativo = (this.router.url === this.item.url);
        this.close.emit(this.item);
    }

}

export interface ItemBarraInterface {
    titulo: string;
    url: string;
    id?: string;
    subtitulo?: string;
    icon?: string;
    ativo?: boolean;
}
