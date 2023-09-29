import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DepartmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Departments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Allow Request Advisors"
          source="allowRequestAdvisors"
        />
        <TextField label="Cc Email" source="ccEmail" />
        <TextField label="Drank" source="drank" />
        <TextField label="Enable Final" source="enableFinal" />
        <TextField label="Enable Round1" source="enableRound1" />
        <TextField label="Enable Round2" source="enableRound2" />
        <TextField label="Enable Round3" source="enableRound3" />
        <TextField label="Enable Round4" source="enableRound4" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Oraclestring" source="oraclestring" />
        <TextField label="Parent School Id" source="parentSchoolId" />
        <TextField
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextField label="Semiblind Review" source="semiblindReview" />
      </Datagrid>
    </List>
  );
};
