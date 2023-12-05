import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const MhciPrereqsReviewerCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Email Notification" source="emailNotification" />
        <TextInput label="Placeout Period Id" source="placeoutPeriodId" />
        <TextInput label="Prereq Type" source="prereqType" />
        <NumberInput step={1} label="Reviewer Luu Id" source="reviewerLuuId" />
      </SimpleForm>
    </Create>
  );
};
