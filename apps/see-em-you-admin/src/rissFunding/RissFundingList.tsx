import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const RissFundingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RissFundings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="External Funding" source="externalFunding" />
        <TextField label="External Source" source="externalSource" />
        <TextField label="External Amount" source="externalAmount" />
        <BooleanField label="Reu Scholarship" source="reuScholarship" />
        <BooleanField label="Direct Funding" source="directFunding" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
