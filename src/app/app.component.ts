
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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


export class AppComponent implements OnInit {
  // title = 'dummy';
  // public onClick(event: MouseEvent) {
  //   //prevent event bubbling up to parent
  //   event.stopPropagation();
  //   this.menuOpened = false;
  // }
  loadedFeature: any;
  isClicked = false;

  check = false;


  // @Input() checkDD = false;
  @Output() branch = new EventEmitter<any>();
  @Output() location = new EventEmitter<string>();
  // @Output() dropdownCheck = new EventEmitter<string>();

  // ddClick(data: any){
  //   console.log("Click Data: ", data);
  //   this.check = data;
  // }

  ngOnInit(){
  }

  onNavigate(feature: string){
    this.loadedFeature = feature;
    this.location = this.loadedFeature;
    // this.dropdownCheck = this.loadedFeature;
    console.log("location: ", this.location);
  }

  sendBranch(data: any){
    this.branch = data;
    this.isClicked = true;
    // this.branch.emit(data);
    console.log("branch: ", this.branch);
  }

  // sendLocation(data: any){
  //   this
  // }
}
