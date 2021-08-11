import { SubCat } from './../../../../assets/sub-cat.model';

import { Action } from '@ngrx/store';
import * as SubActions from "./sub-categories.actions";

const initial_state = {
  branch: [
    {
      'name': 'xyz',
      'image': 'xyz'
    },
    {
      'name': 'abc',
      'image': 'abc'
    }
  ]
}

export function SubCategoriesReducer(state = initial_state, action: Action){
  const subAction = action as SubActions.GetSub
  switch(subAction.type) {
    case SubActions.GET_SUB:
      return {
        //return what needs to be get.
        ...state,
        sub: [subAction.payload]
      }
    default:
      return state;
  }
}
