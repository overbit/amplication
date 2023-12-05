import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReviewPositiveFactorOtherCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Positive Factor Other" source="positiveFactorOther" />
      </SimpleForm>
    </Create>
  );
};
