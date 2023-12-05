import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";
import { MHCIPREREQ_TITLE_FIELD } from "./MhciPrereqTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { MHCIPREREQSSTATUS_TITLE_FIELD } from "../mhciPrereqsStatus/MhciPrereqsStatusTitle";

export const MhciPrereqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Mhci Prereqs Status"
          source="mhciprereqsstatus.id"
          reference="MhciPrereqsStatus"
        >
          <TextField source={MHCIPREREQSSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Period Id" source="periodId" />
        <TextField label="Prereq Type" source="prereq_type" />
        <TextField label="Status2" source="status2" />
        <TextField label="Student Assessment" source="student_assessment" />
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <DateField source="timestamp" label="Timestamp" />
        <ReferenceManyField
          reference="MhciPrereqsConversationComment"
          target="prereq_id"
          label="MhciPrereqsConversationComments"
        >
          <Datagrid rowClick="show">
            <TextField label="Application Id" source="applicationId" />
            <TextField label="Comment" source="comment" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Lu Users Usertypes"
              source="luusersusertype.id"
              reference="LuUsersUsertype"
            >
              <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Mhci Prereqs"
              source="mhciprereq.id"
              reference="MhciPrereq"
            >
              <TextField source={MHCIPREREQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Period Id" source="periodId" />
            <TextField label="Program Id" source="programId" />
            <DateField source="timestamp" label="Timestamp" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
