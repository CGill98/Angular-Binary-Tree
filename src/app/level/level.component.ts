import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})

export class LevelComponent implements OnInit {
  @Input() level: any
  length: number
  levelView = []

  constructor() { 

  }

  ngOnInit(): void {
    console.log(`level ${this.level}`)

    const pos = (level: any):number => {
      const heritage = level.heritage
      if (0 < heritage.length) {
        const potentialLength = 2**heritage.length
        const relPos = heritage.reduce((acc, cur, i):number =>
        { 
          console.log("reduce called")
          return acc + (cur * (0.5**(i + 1)))}, 0)
        
        console.log(`value ${level.value}`)
        console.log(relPos)
        console.log(Math.floor(relPos * potentialLength))

        return Math.floor(relPos * potentialLength)
      }
      return 0
    }


    let j = 0
    for (let i = 0; i < 2**(this.level[0].heritage.length); i++) {
      let val = null 
      if (pos(this.level[j]) === i) {
        val = this.level[j].value
        j = j + 1
      }
      this.levelView.push(val)
    } 
  }

}
