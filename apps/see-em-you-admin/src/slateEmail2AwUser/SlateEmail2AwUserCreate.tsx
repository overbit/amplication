import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SlateEmail2AwUserCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Slate Email" source="slateEmail" />
        <NumberInput step={1} label="Aw Luu User Id" source="awLuuUserId" />
      </SimpleForm>
    </Create>
  );
};
