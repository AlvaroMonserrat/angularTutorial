import {Recipe} from './recipe.model'
import {EventEmitter, Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Rice',
            'This is a Good test',
            'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.southernliving.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2017%2F12%2Fmain%2F2548201_lostc_0082.jpg%3Fitok%3DzarxKBWr',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Rice', 20)
            ]),

        new Recipe(
            'Cheese Humburger', 
            'This is a Nice test',
            'https://revistapym.com.co/wp-content/uploads/2016/10/las-comidas-rapidas-1.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Cheese', 2)
            ]),

        new Recipe(
            'Berry pie',
            'This is a Fantastic test',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz1sckCazMhLiNdYlyYv4OvMTQpvxMChalhTJ_UQR_1zMwWXHR&usqp=CAU',
            [
                new Ingredient('Berry', 1),
                new Ingredient('Flour', 500)
            ])
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice(); //slice pasa un copia del array no la referencia
    }

    getRecipe(index: number){
        return this.recipes[index];
    }
      
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}