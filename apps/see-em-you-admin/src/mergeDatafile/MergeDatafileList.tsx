import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MergeDatafileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MergeDatafiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Converted" source="converted" />
        <TextField label="Convert Error" source="convertError" />
        <TextField label="Convert Message" source="convertMessage" />
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
        <BooleanField label="Merged" source="merged" />
        <TextField label="Merge Error" source="mergeError" />
        <TextField label="Merge Filename" source="mergeFilename" />
        <TextField label="Merge Id" source="mergeId" />
        <TextField label="Merge Message" source="mergeMessage" />
      </Datagrid>
    </List>
  );
};
