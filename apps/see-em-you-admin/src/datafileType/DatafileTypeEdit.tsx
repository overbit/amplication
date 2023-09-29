import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DatafileTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Datafile Type" source="datafileType" />
      </SimpleForm>
    </Edit>
  );
};
