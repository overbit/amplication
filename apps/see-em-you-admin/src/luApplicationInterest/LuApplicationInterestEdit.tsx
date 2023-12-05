import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuApplicationInterestEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Program Id" source="appProgramId" />
        <NumberInput step={1} label="Choice" source="choice" />
        <NumberInput step={1} label="Interest Id" source="interestId" />
      </SimpleForm>
    </Edit>
  );
};
