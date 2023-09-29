import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";

export const CohortList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cohorts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Closed" source="closed" />
        <TextField label="Cohort Id" source="cohortId" />
        <TextField label="Id" source="id" />
        <ReferenceField label="Period" source="period.id" reference="Period">
          <TextField source={PERIOD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Start Date" source="startDate" />
      </Datagrid>
    </List>
  );
};
