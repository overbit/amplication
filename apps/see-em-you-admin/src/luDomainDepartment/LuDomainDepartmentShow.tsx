import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LuDomainDepartmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Drank" source="drank" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
