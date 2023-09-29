import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuProgramsInterestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Interest Id" source="interestId" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
