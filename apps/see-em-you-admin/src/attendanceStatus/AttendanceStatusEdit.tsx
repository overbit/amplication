import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AttendanceStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Value" source="value" />
      </SimpleForm>
    </Edit>
  );
};
