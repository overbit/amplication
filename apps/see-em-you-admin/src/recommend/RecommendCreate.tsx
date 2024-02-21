import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RecommendCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Rec User Id" source="recUserId" />
        <NumberInput step={1} label="Recommendtype" source="recommendtype" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <BooleanInput label="Submitted" source="submitted" />
        <NumberInput
          step={1}
          label="Reminder Sent Count"
          source="reminderSentCount"
        />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
        <NumberInput step={1} label="Cmu Affiliation" source="cmuAffiliation" />
        <NumberInput
          step={1}
          label="Buckleyatupload"
          source="buckleyatupload"
        />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
