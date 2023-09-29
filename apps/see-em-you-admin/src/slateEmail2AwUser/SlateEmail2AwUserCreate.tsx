import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const SlateEmail2AwUserCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Aw Luu User Id" source="awLuuUserId" />
        <TextInput label="Slate Email" source="slateEmail" />
      </SimpleForm>
    </Create>
  );
};
