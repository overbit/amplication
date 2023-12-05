import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const ReviewPositiveFactorEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Positive Factor Id"
          source="positiveFactorId"
        />
        <NumberInput step={1} label="Review Id" source="reviewId" />
      </SimpleForm>
    </Edit>
  );
};
