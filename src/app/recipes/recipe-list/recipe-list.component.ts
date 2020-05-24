import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Good Recipe', 'This is a Good test',
     'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F12%2Fmain%2F2548201_lostc_0082.jpg%3Fitok%3DzarxKBWr'),
      new Recipe('A Nice Recipe', 'This is a Nice test',
     'https://revistapym.com.co/wp-content/uploads/2016/10/las-comidas-rapidas-1.png'),
     new Recipe('A Fantastic Recipe', 'This is a Fantastic test',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz1sckCazMhLiNdYlyYv4OvMTQpvxMChalhTJ_UQR_1zMwWXHR&usqp=CAU')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
