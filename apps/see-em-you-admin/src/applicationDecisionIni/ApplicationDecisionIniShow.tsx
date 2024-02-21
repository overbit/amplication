import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ApplicationDecisionIniShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Admission Program Id" source="admissionProgramId" />
        <TextField label="Choice" source="choice" />
        <TextField label="Admission Status" source="admissionStatus" />
        <TextField label="Comments" source="comments" />
        <TextField label="Scholarship Amt" source="scholarshipAmt" />
        <TextField label="Scholarship Comments" source="scholarshipComments" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
