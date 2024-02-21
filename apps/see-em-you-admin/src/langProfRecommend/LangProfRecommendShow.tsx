import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const LangProfRecommendShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Lang Prof Rec Id" source="langProfRecId" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField
          label="Language Specialization"
          source="languageSpecialization"
        />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
