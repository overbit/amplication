import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const BlacklistReviewerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Deny" source="deny" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
      </SimpleForm>
    </Edit>
  );
};
