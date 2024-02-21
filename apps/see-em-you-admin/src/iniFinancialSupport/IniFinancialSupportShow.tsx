import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IniFinancialSupportShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Request Consideration"
          source="requestConsideration"
        />
        <TextField
          label="Attend Without Support"
          source="attendWithoutSupport"
        />
        <TextField
          label="Receive Outside Support Type"
          source="receiveOutsideSupportType"
        />
        <TextField
          label="Receive Outside Support Source"
          source="receiveOutsideSupportSource"
        />
        <TextField
          label="Apply Outside Support Type"
          source="applyOutsideSupportType"
        />
        <TextField
          label="Apply Outside Support Source"
          source="applyOutsideSupportSource"
        />
        <TextField label="Other Support Source" source="otherSupportSource" />
        <TextField label="Family Support Type" source="familySupportType" />
        <TextField label="Family Support Amount" source="familySupportAmount" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
