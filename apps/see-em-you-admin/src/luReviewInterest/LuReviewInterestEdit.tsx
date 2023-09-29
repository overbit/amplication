import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuReviewInterestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Code" source="code" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Review Id" source="reviewId" />
      </SimpleForm>
    </Edit>
  );
};
