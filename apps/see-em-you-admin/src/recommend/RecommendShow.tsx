import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const RecommendShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Recommendtype" source="recommendtype" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField label="Cmu Affiliation" source="cmuAffiliation" />
        <TextField label="Buckleyatupload" source="buckleyatupload" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
