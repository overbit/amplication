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

import { PERIOD_TITLE_FIELD } from "./PeriodTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const PeriodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Unit Id" source="unitId" />
        <TextField label="Period Type Id" source="periodTypeId" />
        <TextField label="Description" source="description" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Parent Period Id" source="parentPeriodId" />
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="AaDepartment"
          target="period_id"
          label="AaDepartments"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Cohort"
          target="periodId"
          label="Cohorts"
        >
          <Datagrid rowClick="show">
            <TextField label="Cohort Id" source="cohortId" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="Closed" source="closed" />
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PeriodApplication"
          target="period_id"
          label="PeriodApplications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
