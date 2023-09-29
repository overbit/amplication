import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DEPARTMENT_TITLE_FIELD } from "./DepartmentTitle";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";

export const DepartmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Allow Request Advisors"
          source="allowRequestAdvisors"
        />
        <TextField label="Cc Email" source="ccEmail" />
        <TextField label="Drank" source="drank" />
        <TextField label="Enable Final" source="enableFinal" />
        <TextField label="Enable Round1" source="enableRound1" />
        <TextField label="Enable Round2" source="enableRound2" />
        <TextField label="Enable Round3" source="enableRound3" />
        <TextField label="Enable Round4" source="enableRound4" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Oraclestring" source="oraclestring" />
        <TextField label="Parent School Id" source="parentSchoolId" />
        <TextField
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextField label="Semiblind Review" source="semiblindReview" />
        <ReferenceManyField
          reference="AaDepartment"
          target="department_id"
          label="AaDepartments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Department"
              source="department.id"
              reference="Department"
            >
              <TextField source={DEPARTMENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
