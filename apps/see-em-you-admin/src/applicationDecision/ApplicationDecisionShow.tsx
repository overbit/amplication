import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApplicationDecisionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Admission Program Id" source="admissionProgramId" />
        <TextField label="Admission Status" source="admissionStatus" />
        <TextField label="Comments" source="comments" />
        <TextField
          label="Attend Other University"
          source="attendOtherUniversity"
        />
        <TextField label="Other Choice Location" source="otherChoiceLocation" />
        <TextField label="Visit Campus" source="visitCampus" />
        <TextField label="Visit Helpful" source="visitHelpful" />
        <TextField label="Visit Comments" source="visitComments" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
