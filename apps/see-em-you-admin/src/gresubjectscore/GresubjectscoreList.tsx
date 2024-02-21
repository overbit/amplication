import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const GresubjectscoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Gresubjectscores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Testdate" source="testdate" />
        <TextField label="Name" source="name" />
        <TextField label="Score" source="score" />
        <TextField label="Percentile" source="percentile" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Gre Sub Email" source="greSubEmail" />
        <BooleanField label="Scorereceived" source="scorereceived" />
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
