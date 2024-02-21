import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateOrgList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateOrgs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Status" source="status" />
        <TextField label="Local Name" source="localName" />
        <TextField label="Shared Name" source="sharedName" />
        <TextField label="Street" source="street" />
        <TextField label="City" source="city" />
        <TextField label="Region" source="region" />
        <TextField label="Postal" source="postal" />
        <TextField label="Country" source="country" />
        <TextField label="Category" source="category" />
        <TextField label="Org Type" source="orgType" />
        <TextField
          label="Num Records With School Key In Database"
          source="numRecordsWithSchoolKeyInDatabase"
        />
        <TextField
          label="Num Active Applications With School Key In Database"
          source="numActiveApplicationsWithSchoolKeyInDatabase"
        />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
