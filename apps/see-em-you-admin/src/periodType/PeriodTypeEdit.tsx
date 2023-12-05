import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PeriodTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Period Type" source="periodType" />
      </SimpleForm>
    </Edit>
  );
};
