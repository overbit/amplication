import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { MHCIPREREQ_TITLE_FIELD } from "../mhciPrereq/MhciPrereqTitle";

export const MhciPrereqsStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Mhci Prereqs"
          source="mhciprereq.id"
          reference="MhciPrereq"
        >
          <TextField source={MHCIPREREQ_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Program Id" source="programId" />
        <TextField label="Reviewer Explanation" source="reviewerExplanation" />
        <TextField
          label="Reviewer Lu Users Usertypes Id"
          source="reviewerLuUsersUsertypesId"
        />
        <TextField label="Reviewer Status" source="reviewer_status" />
        <TextField label="Reviewer Timestamp" source="reviewerTimestamp" />
        <TextField label="Status3" source="status3" />
      </SimpleShowLayout>
    </Show>
  );
};
