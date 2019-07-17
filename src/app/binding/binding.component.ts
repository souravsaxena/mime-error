import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{
  emlpoyees:any[]=[
    {
      "fname":"john",
      "lname":"doe",
      "age":23
    },
    {
      "fname":"tenny",
      "lname":"ross",
      "age":23
    },
    {
      "fname":"john",
      "lname":"albert",
      "age":23
    },
    {
      "fname":"joe",
      "lname":"root",
      "age":23
    }
  ]
}
