import { Component} from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})


export class HeaderComponent{
    titleHeader="Recipe Book";
    collapsed = true;


    onSavedata(){
        this.titleHeader="AppChef";
    }
    




}