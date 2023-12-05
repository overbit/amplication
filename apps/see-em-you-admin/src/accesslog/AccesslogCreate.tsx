import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AccesslogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Activity" source="activity" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Client" source="client" />
        <NumberInput step={1} label="Domain" source="domain" />
        <TextInput label="Lastsrv" source="lastsrv" />
        <NumberInput
          step={1}
          label="Lu Users Usertypes Id"
          source="luUsersUsertypesId"
        />
        <TextInput label="Ra" source="ra" />
        <TextInput label="Referer" source="referer" />
        <TextInput label="Sa" source="sa" />
        <NumberInput step={1} label="Users Id" source="usersId" />
        <NumberInput step={1} label="Usertype Id" source="usertypeId" />
        <TextInput label="Xforward" source="xforward" />
      </SimpleForm>
    </Create>
  );
};
