import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";
import { PROGRAMMODEL_TITLE_FIELD } from "./ProgramModelTitle";
import { APPLICATIONREQ_TITLE_FIELD } from "../applicationreq/ApplicationreqTitle";
import { DEGREE_TITLE_FIELD } from "../degree/DegreeTitle";
import { FIELDSOFSTUDY_TITLE_FIELD } from "../fieldsofstudy/FieldsofstudyTitle";

export const ProgramModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="LuApplicationProgram"
          target="program_id"
          label="LuApplicationPrograms"
        >
          <Datagrid rowClick="show">
            <TextField label="Choice" source="choice" />
            <TextField label="Round2" source="round2" />
            <TextField label="Decision" source="decision" />
            <TextField label="Admission Status" source="admissionStatus" />
            <TextField label="Admit" source="admit" />
            <TextField label="Admit Comments" source="admitComments" />
            <TextField label="Faccontact" source="faccontact" />
            <TextField label="Stucontact" source="stucontact" />
            <TextField label="Scholarship Amt" source="scholarshipAmt" />
            <TextField
              label="Scholarship Comments"
              source="scholarshipComments"
            />
            <TextField label="Ltichoice" source="ltichoice" />
            <TextField label="Msecertchoice" source="msecertchoice" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MlArea"
          target="program_id"
          label="MlAreas"
        >
          <Datagrid rowClick="show">
            <TextField label="Area" source="area" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PaymentItem"
          target="program_id"
          label="PaymentItems"
        >
          <Datagrid rowClick="show">
            <TextField label="Payment Item Id" source="paymentItemId" />
            <TextField label="Payment Id" source="paymentId" />
            <TextField label="Payment Item Amount" source="paymentItemAmount" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProgramsApplicationreq"
          target="programs_id"
          label="ProgramsApplicationreqs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Applicationreqs"
              source="applicationreq.id"
              reference="Applicationreq"
            >
              <TextField source={APPLICATIONREQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
