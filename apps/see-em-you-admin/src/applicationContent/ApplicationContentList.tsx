import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
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
        <TextField label="Id" source="id" />
        <TextField label="Section Identifier" source="sectionIdentifier" />
        <TextField label="Program Id" source="programId" />
        <BooleanField label="Desired" source="desired" />
        <BooleanField label="Required" source="required" />
      </Datagrid>
    </List>
  );
};
