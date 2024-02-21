import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
} from "react-admin";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const AaDepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Period" source="period.id" reference="Period">
          <TextField source={PERIOD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
