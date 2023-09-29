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

import { DEGREE_TITLE_FIELD } from "./DegreeTitle";
import { FIELDSOFSTUDY_TITLE_FIELD } from "../fieldsofstudy/FieldsofstudyTitle";

export const DegreeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <ReferenceManyField
          reference="ProgramModel"
          target="degree_id"
          label="ProgramModels"
        >
          <Datagrid rowClick="show">
            <TextField label="Baseprice" source="baseprice" />
            <TextField label="Baseprice Late" source="basepriceLate" />
            <ReferenceField
              label="Degree"
              source="degree.id"
              reference="Degree"
            >
              <TextField source={DEGREE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="Enabled" source="enabled" />
            <ReferenceField
              label="Fieldsofstudy"
              source="fieldsofstudy.id"
              reference="Fieldsofstudy"
            >
              <TextField source={FIELDSOFSTUDY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <TextField label="Linkword" source="linkword" />
            <TextField label="Oraclestring" source="oraclestring" />
            <TextField label="Prank" source="prank" />
            <TextField label="Programprice" source="programprice" />
            <TextField label="Programprice Late" source="programpriceLate" />
            <TextField
              label="Registrationoraclestring"
              source="registrationoraclestring"
            />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
