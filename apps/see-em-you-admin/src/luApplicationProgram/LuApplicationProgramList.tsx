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
import { PROGRAMMODEL_TITLE_FIELD } from "../programModel/ProgramModelTitle";

export const LuApplicationProgramList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LuApplicationPrograms"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="Scholarship Comments" source="scholarshipComments" />
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
    </List>
  );
};
