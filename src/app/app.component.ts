import { Component } from '@angular/core';
import {BinaryTree} from './modules/BinaryTree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  binTree = new BinaryTree([4,2,6,1,3,5,7, -1, -2, 8, 21])
  //binTree = new BinaryTree([4,5,6,7, 1, 2, 3])
  printStructure = this.binTree.getStructure()
}
