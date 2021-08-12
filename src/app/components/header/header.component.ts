
import { SubCat } from './../../../assets/sub-cat.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stateName: any;
  branch !: any;
  checkDrop = true; //to hide the dropdown when in sub categories
  @Input() isClicked = true;
  @Output() branchSelected = new EventEmitter<string>();
  @Output() featureSelected = new EventEmitter<string>();


  constructor(private dataService: DataService, private router: Router, private store: Store<{ subList: { branch: SubCat[] } }>) { }

  ngOnInit(): void {
    this.showAll();
    //checking any updates in the store(occurs when someone access the sub-categories) and update the checkdrop
    this.store.select('subList').subscribe(res =>{
      this.branch = res;
      if(this.branch.sub){
        this.checkDrop = !this.checkDrop;
      }
      console.log("!!!!Branch: ", this.branch.sub);
    });
  }
  showAll(){
    this.dataService.getAll()
    .subscribe(
      (data: any) => {
        this.stateName = data.data.locations;

        console.log(this.stateName);
      }
    )
  }

  onSelect(feature: any){
    this.featureSelected.emit(feature);
  }


  getOne(branch: string){
    this.branchSelected.emit(branch);
  }

  navigate(branchID: any){
    this.router.navigate(['/categories', branchID.branch_id]) //link params array
  }
}
