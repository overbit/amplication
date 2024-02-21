import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseLetterRecsDecisionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseLetterRecsDecisions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Java" source="java" />
        <TextField label="Discrete" source="discrete" />
        <TextField label="Algorithms" source="algorithms" />
        <TextField label="Data Structures" source="dataStructures" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
