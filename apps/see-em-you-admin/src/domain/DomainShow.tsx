import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DOMAIN_TITLE_FIELD } from "./DomainTitle";
import { UNIT_TITLE_FIELD } from "../unit/UnitTitle";

export const DomainShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Active" source="active" />
        <TextField label="Banner" source="banner" />
        <TextField label="Description" source="description" />
        <TextField label="Id" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Path" source="path" />
        <ReferenceManyField
          reference="DomainUnit"
          target="domain_id"
          label="DomainUnits"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Domain"
              source="domain.id"
              reference="Domain"
            >
              <TextField source={DOMAIN_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField label="Unit" source="unit.id" reference="Unit">
              <TextField source={UNIT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
