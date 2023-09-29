import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicantIpedsRaceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicantIpedsRaces"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Ipeds Race Id" source="ipedsRaceId" />
        <TextField label="Lu Users Usertypes Id" source="luUsersUsertypesId" />
      </Datagrid>
    </List>
  );
};
