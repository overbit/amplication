import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const JiraIssueList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"JiraIssues"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Jira Issue Id" source="jiraIssueId" />
        <TextField label="Jira Project" source="jiraProject" />
        <TextField label="Jira Id" source="jiraId" />
        <DateField source="created" label="Created" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
