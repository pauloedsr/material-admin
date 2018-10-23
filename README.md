# Material Admin written in Angular6 and Material2

Dashboard Admin App built using Angular 6 and Material 2.

**Modular Menu Sidebar**  and **Taskbar** component.

Fork from https://github.com/start-javascript/sb-admin-material.git

## [Demo](https://rawgit.com/pauloedsr/material-admin/tree/master/dist)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

### Introduction

Provides fast, reliable and extensible starter for the development of Angular projects.

`material-admin` provides the following features:

*   Developed using Material-v2.0.0
*   angular-v6.0.0
*   angular/cli-v6.0.0
*   [ngx-translate-v10.0.0](https://github.com/ngx-translate)
*   Following the best practices.
*   Ahead-of-Time compilation support.
*   Official Angular i18n support.
*   Production and development builds.
*   Tree-Shaking production builds.

### How to start

**Note** that this seed project requires **node >=v8.9.0 and npm >=5.5.1**.

In order to start the project use:

```bash
$ git clone https://github.com/pauloedsr/material-admin.git
$ cd material-admin
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


### INSTRUÇÕES DE USO

**Criando um novo modulo:**
>>*Como exemplo o modulo gestao-tua-escola*


1. Criar modulos em: `src\app\modulos`

2. Utilizar o comando:
	`ng g m modulos/gestao-tua-escola --routing`

	*utilizar hífem para nome composto
	*não esquecer do --routing

3. Criar os components:
	*Caso o módulo tenha vários "submodulos" entao:
	 `ng g c modulos/gestao-tua-escola -is -it`
    *Os paramentros -is e -it são para criar o .html e .scss inline no .ts, pois nao serão utilizado esses carinhas...
    *No .ts em template deve-se deixar assim: `'<router-outlet></router-outlet>'`

4. Routing Layout
	No `\src\app\layout\layout-routing.module.ts` adicionar no route um children para o novo modulo
	`{ path: 'gestao-tua-escola', loadChildren: './../modulos/gestao-tua-escola/gestao-tua-escola.module#GestaoTuaEscolaModule'}`

5. Criando Submodulo.
	Ex: Criar o modulo Supervisor em gestao-tua-escola `\src\app\modulos\gestao-tua-escola\supervisor`

	Seguir os mesmos passos (1, 2 e 3), porém no 3º não terá os parametros `-is -it`
	`ng g m modulos/gestao-tua-escola/supervisor --routing`
	`ng g c modulos/gestao-tua-escola/supervisor`

6. Routing
	No `supervisor-routing.module.ts` ficará:
    `const routes: Routes = [{ path: '', component: SupervisorComponent}];`

	E no routing do modulo "pai": `gestao-tua-escola-routing.module.ts`
>>
	const routes: Routes = [
		{
			path: '',
			component: GestaoTuaEscolaComponent,
			children: [
				{path: 'supervisor', loadChildren: './supervisor/supervisor.module#SupervisorModule'},
				{path: 'orientador', loadChildren: './orientador/orientador.module#OrientadorModule'},
			]
		}
    ];

7. Adicionando um módulo no menu Sidebar (menu lateral bacana)

	Passos abaixo no arquivo: `\src\app\shared\utils\sidebar-menu.ts`

	- Para criar modulo no sidebar é preciso criar um valor no enum `ModuloEnum` (ex.: GESTAO_TUA_ESCOLA = 'GESTAO_TUA_ESCOLA');
	- Na classe `MenuItens` adicionar mais um item no array `this.modulos<ModuloMenuInterface>[]`;
	- Para cada `ModuloMenuInterface` tem o array `itens<ItemMenuInterface>`;
	- Caso um `ItemMenuInterface` tenha subItens é **IMPORTANTE** que o seu atributo `route` não seja preenchido e o `tipo` receba um valor do enum `SubItemEnum`;

>>Obs: nao deu tempo para testar rotas com parametos: "aluno/:matricula" mas acredito que deve-se ter que alterar pouca coisa ou nada :)

>>
	this.modulos.push({
		tipo: ModuloEnum.GESTAO_TUA_ESCOLA,
		nome: 'Gestão Tua Escola',
		icon: 'school',
		itens: [
			{route: '/gestao-tua-escola/supervisor', label: 'Supervisor', icon: 'home'},
			{route: '/gestao-tua-escola/orientador', label: 'Orientador', icon: 'home'},
		]
	});

-------------

**Criando um Serviço**

Crie um serviço em shared/services
`ng g service shared/services/seleciona-escola`

Irá criar `src/app/shared/services/seleciona-escola.service.ts`

-------------

**Barra Tarefas**

A barra de tarefas é bem simples. Basta injetar no construtor o service `BarraTarefasService`. Neste service tem o método `addItem` que recebe um parametro do tipo `ItemBarraInterface`, chamando esse método adiciona-se o item na barra.

A Barra é baseada pela URL então de acordo com a URL que encontra-se, será destacado um item se a URL do mesmo for correspondente.

------------


**Guard**
Para restringir acesso a uma rota deve-se utilizar o parametro `canActivate`. No arquivo `\src\app\app-routing.module.ts` tem um exemplo de utilização com o `AuthGuard` que o mesmo deverá ser modificado para o login do SOE.

-------

**Icons Material Design**

Para consultar os icones disponívels é no link https://material.io/tools/icons/?style=baseline

