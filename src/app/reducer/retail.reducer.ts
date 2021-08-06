import { Data } from './../../assets/data.model';
import { SelectedBranch } from './../actions/retail.action';
import { Action } from '@ngrx/store'


export function BranchReducer(state: Data[], action: SelectedBranch){
  return [...state, action.payload];
}
