import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const LuReviewerGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Group Id" source="groupId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput step={1} label="Round" source="round" />
      </SimpleForm>
    </Edit>
  );
};
