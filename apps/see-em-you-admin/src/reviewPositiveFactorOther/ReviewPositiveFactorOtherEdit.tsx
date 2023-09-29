import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReviewPositiveFactorOtherEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Positive Factor Other" source="positiveFactorOther" />
      </SimpleForm>
    </Edit>
  );
};
