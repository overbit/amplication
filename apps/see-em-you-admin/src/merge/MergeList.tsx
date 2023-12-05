import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MergeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Merges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Error Field" source="errorField" />
        <TextField label="Id" source="id" />
        <BooleanField label="Merged" source="merged" />
        <DateField source="mergeDate" label="Merge Date" />
        <TextField label="Message" source="message" />
      </Datagrid>
    </List>
  );
};
