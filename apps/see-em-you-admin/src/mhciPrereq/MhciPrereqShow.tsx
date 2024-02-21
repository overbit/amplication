import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MHCIPREREQ_TITLE_FIELD } from "./MhciPrereqTitle";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { MHCIPREREQSSTATUS_TITLE_FIELD } from "../mhciPrereqsStatus/MhciPrereqsStatusTitle";

export const MhciPrereqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextField label="Prereq Type" source="prereq_type" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Student Assessment" source="student_assessment" />
        <TextField label="Status2" source="status2" />
        <DateField source="timestamp" label="Timestamp" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Mhci Prereqs Status"
          source="mhciprereqsstatus.id"
          reference="MhciPrereqsStatus"
        >
          <TextField source={MHCIPREREQSSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="MhciPrereqsConversationComment"
          target="prereq_id"
          label="MhciPrereqsConversationComments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
