import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ReviewRiskFactorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Review Id" source="reviewId" />
        <NumberInput step={1} label="Risk Factor Id" source="riskFactorId" />
      </SimpleForm>
    </Edit>
  );
};
