import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ToeflList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Toefls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Essay" source="essay" />
        <TextField label="Essaymb" source="essaymb" />
        <TextField label="Id" source="id" />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Section1" source="section1" />
        <TextField label="Section1mb" source="section1mb" />
        <TextField label="Section2" source="section2" />
        <TextField label="Section2mb" source="section2mb" />
        <TextField label="Section3" source="section3" />
        <TextField label="Section3mb" source="section3mb" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Toefl Email" source="toeflEmail" />
        <TextField label="Toefl Paper Email" source="toeflPaperEmail" />
        <TextField label="Total" source="total" />
        <TextField label="Totalmb" source="totalmb" />
        <TextField label="Type Field" source="typeField" />
      </Datagrid>
    </List>
  );
};
