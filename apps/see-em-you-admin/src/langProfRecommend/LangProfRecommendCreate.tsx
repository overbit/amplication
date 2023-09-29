import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const LangProfRecommendCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Lang Prof Rec Id" source="langProfRecId" />
        <TextInput
          label="Language Specialization"
          source="languageSpecialization"
        />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
        <NumberInput step={1} label="Rec User Id" source="recUserId" />
        <NumberInput
          step={1}
          label="Reminder Sent Count"
          source="reminderSentCount"
        />
        <BooleanInput label="Submitted" source="submitted" />
      </SimpleForm>
    </Create>
  );
};
