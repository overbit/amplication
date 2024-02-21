import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";

export const AaDepartmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AaDepartments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
