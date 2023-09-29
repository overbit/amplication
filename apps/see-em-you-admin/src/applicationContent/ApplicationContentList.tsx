import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationContentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationContents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Desired" source="desired" />
        <TextField label="Id" source="id" />
        <TextField label="Program Id" source="programId" />
        <BooleanField label="Required" source="required" />
        <TextField label="Section Identifier" source="sectionIdentifier" />
      </Datagrid>
    </List>
  );
};
