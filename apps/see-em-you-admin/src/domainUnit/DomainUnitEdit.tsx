import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DomainTitle } from "../domain/DomainTitle";
import { UnitTitle } from "../unit/UnitTitle";

export const DomainUnitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="domain.id" reference="Domain" label="Domain">
          <SelectInput optionText={DomainTitle} />
        </ReferenceInput>
        <ReferenceInput source="unit.id" reference="Unit" label="Unit">
          <SelectInput optionText={UnitTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
