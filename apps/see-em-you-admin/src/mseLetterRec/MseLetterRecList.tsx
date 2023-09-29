import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseLetterRecList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseLetterRecs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Algortihms" source="algortihms" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Data Structures" source="dataStructures" />
        <TextField label="Discrete" source="discrete" />
        <TextField label="Id" source="id" />
        <TextField label="Java" source="java" />
        <TextField label="Reviewer Id" source="reviewerId" />
      </Datagrid>
    </List>
  );
};
