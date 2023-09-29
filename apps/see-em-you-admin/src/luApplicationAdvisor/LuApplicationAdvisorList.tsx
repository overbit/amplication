import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const LuApplicationAdvisorList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuApplicationAdvisors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Advisor Type" source="advisorType" />
        <TextField label="Advisor User Id" source="advisorUserId" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Choice" source="choice" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Program Id" source="programId" />
      </Datagrid>
    </List>
  );
};
