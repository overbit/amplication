import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const MhciPrereqsReviewerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Email Notification" source="emailNotification" />
        <TextInput label="Placeout Period Id" source="placeoutPeriodId" />
        <TextInput label="Prereq Type" source="prereqType" />
        <NumberInput step={1} label="Reviewer Luu Id" source="reviewerLuuId" />
      </SimpleForm>
    </Edit>
  );
};
