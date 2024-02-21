import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MhciPrereqsReviewerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Reviewer Luu Id" source="reviewerLuuId" />
        <TextInput label="Prereq Type" source="prereqType" />
        <TextInput label="Placeout Period Id" source="placeoutPeriodId" />
        <BooleanInput label="Email Notification" source="emailNotification" />
      </SimpleForm>
    </Create>
  );
};
