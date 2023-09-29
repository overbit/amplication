import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const MultiprogramlockoutCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Program Id1" source="programId1" />
        <NumberInput step={1} label="Program Id2" source="programId2" />
      </SimpleForm>
    </Create>
  );
};
