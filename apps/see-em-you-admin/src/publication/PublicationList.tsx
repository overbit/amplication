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

export const PublicationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Publications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Title" source="title" />
        <TextField label="Author" source="author" />
        <TextField label="Forum" source="forum" />
        <TextField label="Citation" source="citation" />
        <TextField label="Url" source="url" />
        <TextField label="Status" source="status" />
        <TextField label="Type Field" source="typeField" />
        <TextField label="Type Other" source="typeOther" />
        <TextField label="Datafile Id" source="datafileId" />
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
