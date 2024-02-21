import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const LuApplicationAppreqShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Req Id" source="reqId" />
        <DateField source="lastModified" label="Last Modified" />
        <BooleanField label="Completed" source="completed" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
