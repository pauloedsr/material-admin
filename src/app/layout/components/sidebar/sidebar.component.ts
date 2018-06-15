import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    navs = ModuloEnum;
    navAtiva: string;
    subMenuAtivo: string;
    menuItens = new MenuItens().itens;
    constructor(private router: Router) {}

    ngOnInit() {
        this.loadActiveMenu();
    }

    isToggled(nav: string) {
        const domBody: any = document.querySelector('body');
        if (nav === this.navAtiva) {
            domBody.classList.toggle('navsidebar-toggle');
        } else {
            domBody.classList.remove('navsidebar-toggle');
        }
    }

    navSideBar(nav: string) {
        this.isToggled(nav);
        this.navAtiva = nav;
    }

    isNavAtiva(nav: string) {
        return nav === this.navAtiva;
    }

    isSubMenuAtivo(subMenu: string) {
        return subMenu === this.subMenuAtivo;
    }

    private loadActiveMenu() {
        const menuItem = this.menuItens.filter((value) => {
            const itemAtivado = value.itens.filter((item) => {
                if (!item.route && item.submenu && item.submenu.length > 0) {
                    return item.submenu.filter((subitem) => {
                        if (subitem.route === this.router.url) {
                            this.subMenuAtivo = item.tipo;
                            return true;
                        } return false;
                    })[0];
                } else if (item.route === this.router.url) {
                    return true;
                } else {
                    return false;
                }
            })[0];
            return itemAtivado;
        });
        this.navAtiva = (menuItem && menuItem.length > 0) ? menuItem[0].tipo : ModuloEnum.GESTAO_TUA_ESCOLA;
    }
}

export enum ModuloEnum {
    GESTAO_TUA_ESCOLA = 'GESTAO_TUA_ESCOLA',
    SB_ADMIN = 'SB_ADMIN',
    TESTE = 'TESTE',
    SUB_MENU_TESTE = 'SUB_MENU_TESTE',
    SUB_MENU_TESTE2 = 'SUB_MENU_TESTE2',
}

/**
 * Classe para popular o side bar menu
 */
export class MenuItens {
    itens = new Array<NavMenuInterface>();

    constructor() {
        this.itens.push({
            tipo: ModuloEnum.GESTAO_TUA_ESCOLA,
            nome: 'Modulo 1',
            icon: 'school',
            itens: [
                {route: '/dashboard', label: 'Dashboard', icon: 'input'},
                {label: 'Menu', icon: 'add', tipo: ModuloEnum.SUB_MENU_TESTE, submenu: [
                    {label: 'Blank Page', icon: 'home', route: '/blank-page'},
                ]},
            ]
        });

        this.itens.push({
            tipo: ModuloEnum.SB_ADMIN,
            nome: 'Examples',
            icon: 'help_outline',
            itens: [
                {route: '/dashboard', label: 'Dashboard', icon: 'dashboard'},
                {route: '/charts', label: 'Charts', icon: 'bar_chart'},
                {route: '/tables', label: 'Tables', icon: 'table_chart'},
                {route: '/forms', label: 'Forms', icon: 'input'},
                {label: 'Material', icon: 'add', tipo: ModuloEnum.SUB_MENU_TESTE2, submenu: [
                    {route: '/grid', label: 'Material Grid', icon: 'grid_on'},
                    {route: '/components', label: 'Material Component', icon: 'code'},
                ]},
            ],
        });

        this.itens.push({
            tipo: ModuloEnum.TESTE,
            nome: 'Teste Módulo',
            icon: 'archive',
            itens: [
                {route: '/dashboard0', label: 'Controle Acesso', icon: 'assignment_ind'},
                {route: '/dashboard1', label: 'Situações', icon: 'chrome_reader_mode'},
                {route: '/dashboard2', label: 'Opções de Teste', icon: 'build'},
            ]
        });

    }
}

export interface NavMenuInterface {
    tipo?: string;
    nome: string;
    icon: string;
    itens: ItemMenuInterface[];
}

export interface ItemMenuInterface {
    tipo?: string;
    route?: string;
    label: string;
    icon: string;
    submenu?: ItemMenuInterface[];
}
