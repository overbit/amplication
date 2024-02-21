import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEGREE_TITLE_FIELD } from "../degree/DegreeTitle";
import { FIELDSOFSTUDY_TITLE_FIELD } from "../fieldsofstudy/FieldsofstudyTitle";

export const ProgramModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProgramModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Linkword" source="linkword" />
        <TextField label="Programprice" source="programprice" />
        <TextField label="Programprice Late" source="programpriceLate" />
        <TextField label="Description" source="description" />
        <TextField label="Url" source="url" />
        <TextField label="Oraclestring" source="oraclestring" />
        <TextField
          label="Registrationoraclestring"
          source="registrationoraclestring"
        />
        <TextField label="Baseprice" source="baseprice" />
        <TextField label="Baseprice Late" source="basepriceLate" />
        <TextField label="Prank" source="prank" />
        <TextField label="Enabled" source="enabled" />
        <ReferenceField label="Degree" source="degree.id" reference="Degree">
          <TextField source={DEGREE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Fieldsofstudy"
          source="fieldsofstudy.id"
          reference="Fieldsofstudy"
        >
          <TextField source={FIELDSOFSTUDY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
