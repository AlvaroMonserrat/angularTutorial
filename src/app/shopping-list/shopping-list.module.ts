import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoggingService } from '../logging.service';


@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,
    ],

    imports: [
        RouterModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ShoppingListRoutingModule
    ],
    //providers: [LoggingService]
})

export class ShoppingListModule{
}