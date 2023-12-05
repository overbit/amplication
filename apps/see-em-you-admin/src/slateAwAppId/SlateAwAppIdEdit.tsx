import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SlateAwAppIdEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Aw App Id" source="awAppId" />
      </SimpleForm>
    </Edit>
  );
};
