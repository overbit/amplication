import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CmuAffiliationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CmuAffiliations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Cmu Employee" source="cmuEmployee" />
        <TextField
          label="Cmu Student Or Alumnus"
          source="cmuStudentOrAlumnus"
        />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
