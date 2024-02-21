import { Domain } from "../domain/Domain";
import { Unit } from "../unit/Unit";

export type DomainUnit = {
  domain?: Domain;
  unit?: Unit;
  id: string;
};
