import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationDecisionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationDecisions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Admission Program Id" source="admissionProgramId" />
        <TextField label="Admission Status" source="admissionStatus" />
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Attend Other University"
          source="attendOtherUniversity"
        />
        <TextField label="Comments" source="comments" />
        <TextField label="Id" source="id" />
        <TextField label="Other Choice Location" source="otherChoiceLocation" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Visit Campus" source="visitCampus" />
        <TextField label="Visit Comments" source="visitComments" />
        <TextField label="Visit Helpful" source="visitHelpful" />
      </Datagrid>
    </List>
  );
};
