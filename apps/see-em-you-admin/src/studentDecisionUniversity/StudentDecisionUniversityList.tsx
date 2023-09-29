import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const StudentDecisionUniversityList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentDecisionUniversities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Accepted" source="accepted" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Program Id" source="programId" />
      </Datagrid>
    </List>
  );
};
