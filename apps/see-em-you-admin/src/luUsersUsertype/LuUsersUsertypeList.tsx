import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD } from "../mhciPrereqsProgrammingSample/MhciPrereqsProgrammingSampleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LuUsersUsertypeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuUsersUsertypes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Domain" source="domain" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Mhci Prereqs Programming Samples"
          source="mhciprereqsprogrammingsample.id"
          reference="MhciPrereqsProgrammingSample"
        >
          <TextField source={MHCIPREREQSPROGRAMMINGSAMPLE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Users" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Usertype Id" source="usertypeId" />
      </Datagrid>
    </List>
  );
};
