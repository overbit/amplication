import { Domain } from "../domain/Domain";
import { Unit } from "../unit/Unit";

export type DomainUnit = {
  domain?: Domain;
  id: string;
  unit?: Unit;
};
