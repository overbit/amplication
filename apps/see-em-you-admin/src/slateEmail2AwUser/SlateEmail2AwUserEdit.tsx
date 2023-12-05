import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SlateEmail2AwUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Aw Luu User Id" source="awLuuUserId" />
        <TextInput label="Slate Email" source="slateEmail" />
      </SimpleForm>
    </Edit>
  );
};
