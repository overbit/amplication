import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const RecyclableSelectionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Users Id" source="usersId" />
      </SimpleForm>
    </Edit>
  );
};
