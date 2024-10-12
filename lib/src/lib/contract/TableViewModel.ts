import { PropertyState, TableState } from "./State";

export interface TableViewModel {
  name: string;
	propertyList: PropertyViewModel[];
	state: TableState;
}

export interface PropertyViewModel {
  name: string;
	state: PropertyState;
	className?: string;
}