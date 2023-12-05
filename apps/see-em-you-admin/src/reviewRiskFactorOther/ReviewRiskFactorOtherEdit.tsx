import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ReviewRiskFactorOtherEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Risk Factor Other" source="riskFactorOther" />
      </SimpleForm>
    </Edit>
  );
};
