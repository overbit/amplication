import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RecommenderInfoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecommenderInfos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Title" source="title" />
        <TextField label="Affiliation" source="affiliation" />
        <TextField label="Phone" source="phone" />
        <TextField
          label="Relationship To Applicant"
          source="relationshipToApplicant"
        />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
