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

import { APPLICATIONREQ_TITLE_FIELD } from "./ApplicationreqTitle";
import { PROGRAMMODEL_TITLE_FIELD } from "../programModel/ProgramModelTitle";

export const ApplicationreqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Id" source="id" />
        <TextField label="Linkname" source="linkname" />
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Sortorder" source="sortorder" />
        <ReferenceManyField
          reference="ProgramsApplicationreq"
          target="applicationreqs_id"
          label="ProgramsApplicationreqs"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Applicationreqs"
              source="applicationreq.id"
              reference="Applicationreq"
            >
              <TextField source={APPLICATIONREQ_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
