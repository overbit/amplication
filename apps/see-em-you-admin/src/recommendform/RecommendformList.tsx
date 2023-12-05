import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RecommendformList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Recommendforms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Form Id" source="formId" />
        <TextField label="Id" source="id" />
        <TextField label="Question Id" source="questionId" />
        <TextField label="Question Key" source="questionKey" />
        <TextField label="Recommend Id" source="recommendId" />
        <TextField label="Response" source="response" />
      </Datagrid>
    </List>
  );
};
