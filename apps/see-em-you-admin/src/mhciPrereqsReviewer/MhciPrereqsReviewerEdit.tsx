import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MhciPrereqsReviewerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Reviewer Luu Id" source="reviewerLuuId" />
        <TextInput label="Prereq Type" source="prereqType" />
        <TextInput label="Placeout Period Id" source="placeoutPeriodId" />
        <BooleanInput label="Email Notification" source="emailNotification" />
      </SimpleForm>
    </Edit>
  );
};
