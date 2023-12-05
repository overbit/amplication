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

import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { PERIOD_TITLE_FIELD } from "./PeriodTitle";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const PeriodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Description" source="description" />
        <TextField label="End Date" source="endDate" />
        <TextField label="Id" source="id" />
        <TextField label="Parent Period Id" source="parentPeriodId" />
        <TextField label="Period Type Id" source="periodTypeId" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Unit Id" source="unitId" />
        <ReferenceManyField
          reference="AaDepartment"
          target="period_id"
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
        <ReferenceManyField
          reference="Cohort"
          target="periodId"
          label="Cohorts"
        >
          <Datagrid rowClick="show">
            <TextField label="Closed" source="closed" />
            <TextField label="Cohort Id" source="cohortId" />
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Start Date" source="startDate" />
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
