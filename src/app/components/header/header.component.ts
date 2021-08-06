import { DataService } from './../../services/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stateName: any;

  @Output() branchSelected = new EventEmitter<string>();
  @Output() featureSelected = new EventEmitter<string>();


  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.showAll();
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
