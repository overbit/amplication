import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
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
        <TextField label="Merge Id" source="mergeId" />
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <BooleanField label="Converted" source="converted" />
        <TextField label="Convert Error" source="convertError" />
        <TextField label="Convert Message" source="convertMessage" />
        <TextField label="Merge Filename" source="mergeFilename" />
        <BooleanField label="Merged" source="merged" />
        <TextField label="Merge Error" source="mergeError" />
        <TextField label="Merge Message" source="mergeMessage" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
