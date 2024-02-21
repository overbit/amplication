import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const LangProfRecommendCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Rec User Id" source="recUserId" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Lang Prof Rec Id" source="langProfRecId" />
        <BooleanInput label="Submitted" source="submitted" />
        <NumberInput
          step={1}
          label="Reminder Sent Count"
          source="reminderSentCount"
        />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
        <TextInput
          label="Language Specialization"
          source="languageSpecialization"
        />
      </SimpleForm>
    </Create>
  );
};
