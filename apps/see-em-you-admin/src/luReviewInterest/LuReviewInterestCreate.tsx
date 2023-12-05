import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const LuReviewInterestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Code" source="code" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Review Id" source="reviewId" />
      </SimpleForm>
    </Create>
  );
};
