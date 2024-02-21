import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CommitteeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Group Id" source="groupId" />
      </SimpleForm>
    </Edit>
  );
};
