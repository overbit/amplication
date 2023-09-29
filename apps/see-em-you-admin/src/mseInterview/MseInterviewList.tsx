import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseInterviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseInterviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField label="Interview Comments" source="interviewComments" />
        <TextField label="Interview Date" source="interviewDate" />
        <TextField label="Interview Type" source="interviewType" />
        <TextField label="Interview Type Other" source="interviewTypeOther" />
        <TextField label="Reviewer Id" source="reviewerId" />
      </Datagrid>
    </List>
  );
};
