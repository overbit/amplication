import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationDecisionIniList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationDecisionInis"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Admission Program Id" source="admissionProgramId" />
        <TextField label="Admission Status" source="admissionStatus" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Comments" source="comments" />
        <TextField label="Id" source="id" />
        <TextField label="Scholarship Amt" source="scholarshipAmt" />
        <TextField label="Scholarship Comments" source="scholarshipComments" />
        <DateField source="timestamp" label="Timestamp" />
      </Datagrid>
    </List>
  );
};
