import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SlateEmail2AwUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Slate Email" source="slateEmail" />
        <NumberInput step={1} label="Aw Luu User Id" source="awLuuUserId" />
      </SimpleForm>
    </Edit>
  );
};
