import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { MHCIPREREQSSTATUS_TITLE_FIELD } from "../mhciPrereqsStatus/MhciPrereqsStatusTitle";

export const MhciPrereqList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Student Lu Users Usertypes Id"
          source="studentLuUsersUsertypesId"
        />
        <TextField label="Prereq Type" source="prereq_type" />
        <TextField label="Period Id" source="periodId" />
        <TextField label="Student Assessment" source="student_assessment" />
        <TextField label="Status2" source="status2" />
        <DateField source="timestamp" label="Timestamp" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Mhci Prereqs Status"
          source="mhciprereqsstatus.id"
          reference="MhciPrereqsStatus"
        >
          <TextField source={MHCIPREREQSSTATUS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
