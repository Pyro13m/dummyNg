import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Data } from '../../assets/data.model'

export const SELECTED_BRANCH = 'BRANCH Select';

export class SelectedBranch implements Action {
  readonly type = SELECTED_BRANCH;

  constructor(public payload: Data){}
}

