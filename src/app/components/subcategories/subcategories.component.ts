import { SubCat } from './../../../assets/sub-cat.model';
// import { branch } from './../../app.component';
import { DataService } from './../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent implements OnInit {
  subChose : any;
  data : any;
  location !: string;
  b_id !: string;
  cat !: string;
  // modifiedData : any;
  len : any;
  branch !: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private store: Store<{ subList: { branch: SubCat[] } }>
    ) {


    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { name: "name" , ... }

        this.subChose = params;
        this.location = params.location;
        this.b_id = params.branch_id;
        this.cat = params.category;

      }
    )
  }

  ngOnInit(): void {
    this.store.select('subList').subscribe(res =>{
      this.branch = res;
      console.log("!!!!Branch: ", this.branch.sub);
    });
    //console.log("Sub Categories!: ", this.branch)
    // this.showAll();
    // this.modifyData();
  }

  showAll(){
    this.dataService.getAll()
    .subscribe(
      (data: any) => {
        this.data = data.data.locations;
        this.len = this.data.length;
        console.log("Final Data ", this.len);

      }
    )
  }

    // Debugging
  // modifyData(){
  //   console.log("Location: ", this.location);
  //   console.log("b_id: ", this.b_id);
  //   console.log("cat: ", this.cat);
  //   console.log("len", this.len)
  //   console.log("DATA: ", this.data)
  // }
}

// for(var i=0;i<8;i++){ //1
//   console.log("index: ", i);
//   console.log("data: ", this.data)
  // if(this.data[i].name === this.subChose.location){
    // for(let j=0;j<this.data[i].branches.length;j++){ //2
    //   if(this.data[i].branches[j].branch_id === this.subChose.branch_id){
    //     for(let k=0;k<this.data[i].branches[j].length;k++){ //3 O(n^3)
    //       if(this.data[i].branches[j].name[k] === this.subChose.category){
    //         this.modifiedData = this.data[i].branches[j].name[k].subcategories;
    //         break;
    //       }
    //     }
    //   }
    // }
  // }
  // console.log(this.data.length)
// }
