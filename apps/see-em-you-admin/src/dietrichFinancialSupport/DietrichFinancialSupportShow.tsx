import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DietrichFinancialSupportShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField
          label="Interested B2 Training"
          source="interestedB2Training"
        />
        <TextField label="Qualified Assistance" source="qualifiedAssistance" />
        <TextField label="Received Loans" source="receivedLoans" />
        <TextField
          label="Received Scholarships"
          source="receivedScholarships"
        />
        <TextField label="Support Sources" source="supportSources" />
      </SimpleShowLayout>
    </Show>
  );
};
