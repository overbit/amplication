import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const ReviewPositiveFactorCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Positive Factor Id"
          source="positiveFactorId"
        />
        <NumberInput step={1} label="Review Id" source="reviewId" />
      </SimpleForm>
    </Create>
  );
};
