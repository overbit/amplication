import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const DisabilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Disability Type" source="disabilityType" />
        <NumberInput step={1} label="Has Disability" source="hasDisability" />
      </SimpleForm>
    </Edit>
  );
};
