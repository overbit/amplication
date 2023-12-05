import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuApplicationInterestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Program Id" source="appProgramId" />
        <NumberInput step={1} label="Choice" source="choice" />
        <NumberInput step={1} label="Interest Id" source="interestId" />
      </SimpleForm>
    </Create>
  );
};
