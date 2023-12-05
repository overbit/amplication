import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LuProgramsRecommendationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuProgramsRecommendations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Numrequired" source="numrequired" />
        <TextField label="Program Id" source="programId" />
        <TextField
          label="Recommendationtype Id"
          source="recommendationtypeId"
        />
      </Datagrid>
    </List>
  );
};
