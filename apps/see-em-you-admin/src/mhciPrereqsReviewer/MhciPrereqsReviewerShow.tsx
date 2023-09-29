import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const MhciPrereqsReviewerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Email Notification" source="emailNotification" />
        <TextField label="Id" source="id" />
        <TextField label="Placeout Period Id" source="placeoutPeriodId" />
        <TextField label="Prereq Type" source="prereqType" />
        <TextField label="Reviewer Luu Id" source="reviewerLuuId" />
      </SimpleShowLayout>
    </Show>
  );
};
