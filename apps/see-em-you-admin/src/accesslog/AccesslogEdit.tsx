import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const AccesslogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Users Id" source="usersId" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <NumberInput step={1} label="Usertype Id" source="usertypeId" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Client" source="client" />
        <TextInput label="Activity" source="activity" />
        <NumberInput step={1} label="Domain" source="domain" />
        <TextInput label="Referer" source="referer" />
        <TextInput label="Xforward" source="xforward" />
        <TextInput label="Sa" source="sa" />
        <TextInput label="Ra" source="ra" />
        <TextInput label="Lastsrv" source="lastsrv" />
      </SimpleForm>
    </Edit>
  );
};
