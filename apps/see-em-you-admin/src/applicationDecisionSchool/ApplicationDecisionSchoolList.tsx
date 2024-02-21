import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationDecisionSchoolList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationDecisionSchools"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Name" source="name" />
        <BooleanField label="Accepted" source="accepted" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
