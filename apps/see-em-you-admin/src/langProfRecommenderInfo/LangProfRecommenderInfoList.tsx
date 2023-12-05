import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LangProfRecommenderInfoList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LangProfRecommenderInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Affiliation" source="affiliation" />
        <TextField label="Id" source="id" />
        <TextField
          label="Language Specialization"
          source="languageSpecialization"
        />
        <TextField label="Phone" source="phone" />
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
