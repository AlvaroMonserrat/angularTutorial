import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirectice } from './placeholder/placeholder.directive';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';


@NgModule({
    declarations: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirectice
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirectice,
        CommonModule
    ],
    entryComponents: [
        AlertComponent
      ]
})

export class SharedModule{

}