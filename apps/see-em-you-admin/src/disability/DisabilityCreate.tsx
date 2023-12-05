import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const DisabilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Disability Type" source="disabilityType" />
        <NumberInput step={1} label="Has Disability" source="hasDisability" />
      </SimpleForm>
    </Create>
  );
};
