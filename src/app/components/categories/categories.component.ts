import { SubCat } from './../../../assets/sub-cat.model';
import { Router } from '@angular/router';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SubListActions from '../../components/subcategories/store/sub-categories.actions'


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @Output() selectedSub = new EventEmitter<any>();
  @Input() featureChose : any;
  @Input() locationChose: any;
  subList: any;
  // @Output() ddClick = new EventEmitter<any>();   //To hide the dropdown when in Sub-Categories

  click = true;
  constructor(private router: Router, private store: Store<{ branch: SubCat[] } >) {
    this.featureChose = ''
  }

  ngOnInit(): void {
  }

  getData(){
    console.log("FEATURE:", this.featureChose);
    console.log("Location: ", this.locationChose);
  }

  //Debugging
  // onClick(data: any){
  //   this.selectedSub.emit(this.featureChose);
    // console.log(data.subcategories);
  //   console.log(data);
  // }

  navigate(data: any){
    // this.ddClick.emit("true");
    this.click = !this.click
    this.subList = data.subcategories;
    this.store.dispatch(new SubListActions.GetSub(this.subList));
    console.log("HERE:" , this.subList);
    this.router.navigate(['/categories/subcategories', data.name],
    {
      queryParams: {
        location: this.locationChose,
        branch_id: this.featureChose.branch_id,
        category: data.name,
      }
    }) //link params array
  }
}
