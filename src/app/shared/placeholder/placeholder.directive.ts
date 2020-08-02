import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appPlaceholder]'
})

export class PlaceholderDirectice{
    constructor(public viewContainerRef: ViewContainerRef){}
}