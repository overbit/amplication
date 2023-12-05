import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ReviewRiskFactorOtherCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Risk Factor Other" source="riskFactorOther" />
      </SimpleForm>
    </Create>
  );
};
