import { Action } from "@ngrx/store";
import { SubCat } from "src/assets/sub-cat.model";

export const GET_SUB = 'GET_SUB';

export class GetSub implements Action {
  readonly type = GET_SUB;

  constructor(public payload : SubCat[]){}
}
