import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  @Input() printStructure: any 


  constructor() { 
    if (this.printStructure) {
      console.log(this.printStructure)

    }

  }

  ngOnInit(): void {
  }

}
