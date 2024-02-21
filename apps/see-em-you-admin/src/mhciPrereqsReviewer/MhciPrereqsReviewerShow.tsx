import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const MhciPrereqsReviewerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Reviewer Luu Id" source="reviewerLuuId" />
        <TextField label="Prereq Type" source="prereqType" />
        <TextField label="Placeout Period Id" source="placeoutPeriodId" />
        <BooleanField label="Email Notification" source="emailNotification" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
