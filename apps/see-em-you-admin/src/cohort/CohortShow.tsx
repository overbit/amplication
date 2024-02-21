import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";

export const CohortShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cohort Id" source="cohortId" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Closed" source="closed" />
        <ReferenceField label="Period" source="period.id" reference="Period">
          <TextField source={PERIOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
