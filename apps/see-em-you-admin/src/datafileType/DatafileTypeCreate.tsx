import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DatafileTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Datafile Type" source="datafileType" />
      </SimpleForm>
    </Create>
  );
};
