import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractModel } from '@app/modules/cadastros/abstract.model';
import { ClienteModel } from '@app/modules/cadastros/clientes/cliente.model';
import { CountryService } from '@app/modules/cadastros/country.service';
import { GridComponent } from '@app/modules/cadastros/grid.component';
import { SBSortableHeaderDirective, SortEvent } from '@app/modules/cadastros/sortable.directive';
import { UsuarioModel } from '@app/modules/cadastros/usuarios/usuario.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'usuario.grid.component.html',
})
export class UsuarioGridComponent extends GridComponent<UsuarioModel> {

    usuarios$: BehaviorSubject<Array<UsuarioModel>>;

    constructor(private service: CountryService<UsuarioModel>, changeDetectorRef: ChangeDetectorRef) {
        super(service, changeDetectorRef);

        this.usuarios$ = new BehaviorSubject<Array<UsuarioModel>>([]);
        this.carregarDados();
    }

    carregarDados() {
        this.service.buscarLista$('usuario/listUsuario')
            .subscribe((dados) => {
                this.usuarios$.next(dados);
            });
    }

    excluir(usuario: UsuarioModel) {
        this.service.delete$('usuario/deletar', usuario)
            .subscribe((usuario) => {
                setTimeout(() => this.carregarDados());
            });
    }
}
