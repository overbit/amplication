import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomainTitle } from "../domain/DomainTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const DomainUnitCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="domain.id" reference="Domain" label="Domain">
          <SelectInput optionText={DomainTitle} />
        </ReferenceInput>
        <ReferenceInput source="unit.id" reference="Unit" label="Unit">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
