import { Router } from '@angular/router';

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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

  click = true;
  constructor(private router: Router) {
    this.featureChose = ''
  }

  ngOnInit(): void {
  }

  getData(){
    console.log("FEATURE:", this.featureChose);
    console.log("Location: ", this.locationChose);
  }

  onClick(data: any){
    this.selectedSub.emit(this.featureChose);
    // console.log(data.subcategories);
    console.log(data);
  }

  navigate(data: any){
    this.click = !this.click
    this.subList = data.subcategories;
    console.log("HERE:" , this.subList);
    this.router.navigate(['/categories/subcategories', data.name],
    {
      queryParams: {
        location: this.locationChose,
        branch_id: this.featureChose.branch_id,
        category: data.name

      }
    }) //link params array
  }
}
