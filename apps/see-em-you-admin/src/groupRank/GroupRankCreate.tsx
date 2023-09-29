import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const GroupRankCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Comment" source="comment" />
        <NumberInput step={1} label="Group Id" source="groupId" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <TextInput label="Ranking" source="ranking" />
        <NumberInput step={1} label="Round" source="round" />
      </SimpleForm>
    </Create>
  );
};
