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

import { DEGREE_TITLE_FIELD } from "../degree/DegreeTitle";
import { FIELDSOFSTUDY_TITLE_FIELD } from "./FieldsofstudyTitle";

export const FieldsofstudyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="ProgramModel"
          target="fieldofstudy_id"
          label="ProgramModels"
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
            <ReferenceField
              label="Degree"
              source="degree.id"
              reference="Degree"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
