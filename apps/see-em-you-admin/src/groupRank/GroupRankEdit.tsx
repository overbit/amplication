import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const GroupRankEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Group Id" source="groupId" />
        <NumberInput step={1} label="Round" source="round" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <TextInput label="Comment" source="comment" />
        <TextInput label="Ranking" source="ranking" />
      </SimpleForm>
    </Edit>
  );
};
