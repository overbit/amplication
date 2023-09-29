import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuDegreesApplicationreqCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Appreq Id" source="appreqId" />
        <NumberInput step={1} label="Degree Id" source="degreeId" />
      </SimpleForm>
    </Create>
  );
};
