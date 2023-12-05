import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const LuApplicationAppreqShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Completed" source="completed" />
        <TextField label="Id" source="id" />
        <DateField source="lastModified" label="Last Modified" />
        <TextField label="Req Id" source="reqId" />
      </SimpleShowLayout>
    </Show>
  );
};
