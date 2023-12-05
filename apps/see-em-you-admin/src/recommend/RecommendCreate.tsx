import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RecommendCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="Buckleyatupload"
          source="buckleyatupload"
        />
        <NumberInput step={1} label="Cmu Affiliation" source="cmuAffiliation" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
        <NumberInput step={1} label="Recommendtype" source="recommendtype" />
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
