import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApplicationDecisionShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
