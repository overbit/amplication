import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MHCIPREREQ_TITLE_FIELD } from "../mhciPrereq/MhciPrereqTitle";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";

export const MhciPrereqsConversationCommentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Comment" source="comment" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <ReferenceField
          label="Mhci Prereqs"
          source="mhciprereq.id"
          reference="MhciPrereq"
        >
          <TextField source={MHCIPREREQ_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Lu Users Usertypes"
          source="luusersusertype.id"
          reference="LuUsersUsertype"
        >
          <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
