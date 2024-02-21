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

import { PROGRAMMODEL_TITLE_FIELD } from "../programModel/ProgramModelTitle";
import { APPLICATIONREQ_TITLE_FIELD } from "./ApplicationreqTitle";

export const ApplicationreqShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Short" source="short" />
        <TextField label="Linkname" source="linkname" />
        <TextField label="Sortorder" source="sortorder" />
        <TextField label="Id" source="id" />
        <ReferenceManyField
          reference="ProgramsApplicationreq"
          target="applicationreqs_id"
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
