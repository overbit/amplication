import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ReviewRiskFactorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Review Id" source="reviewId" />
        <NumberInput step={1} label="Risk Factor Id" source="riskFactorId" />
      </SimpleForm>
    </Create>
  );
};
