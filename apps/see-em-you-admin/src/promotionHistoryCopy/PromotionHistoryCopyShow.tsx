import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PromotionHistoryCopyShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <DateField source="statusTime" label="Status Time" />
        <TextField label="Round" source="round" />
        <TextField label="Promotion Method" source="promotion_method" />
        <TextField label="Users Id" source="usersId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
