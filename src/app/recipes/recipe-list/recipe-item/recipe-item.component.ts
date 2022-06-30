import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes-service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelected(){
    // this.recipeSelected.emit();
    this.recipesService.recripeSelected.emit(this.recipe);
  }
}
