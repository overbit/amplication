import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReclogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Ip" source="ip" />
        <TextInput label="Message" source="message" />
      </SimpleForm>
    </Edit>
  );
};
