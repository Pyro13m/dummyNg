
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// export interface branch {
//   branch_id: string,
// 	name: string,
// 	categories: Array<{
//     name: string,
//     image: string,
//     subcategories: Array<
//       {
//         name: string,
//         image: string
//       }>
//   }>
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {
  title = 'dummy';
  // public onClick(event: MouseEvent) {
  //   //prevent event bubbling up to parent
  //   event.stopPropagation();
  //   this.menuOpened = false;
  // }
  loadedFeature: any;
  isClicked = false;

  @Output() branch = new EventEmitter<any>();
  @Output() location = new EventEmitter<string>();


  onNavigate(feature: string){
    this.loadedFeature = feature;
    this.location = this.loadedFeature;
    console.log("location: ", this.location);
  }

  sendBranch(data: any){
    this.branch = data;
    this.isClicked = true;
    // this.branch.emit(data);
    console.log("branch: ", this.branch);
  }

  sendLocation(data: any){
    this
  }
}
