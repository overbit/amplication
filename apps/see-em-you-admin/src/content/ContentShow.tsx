import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Name" source="name" />
        <TextField label="Content" source="content" />
        <TextField label="Contenttype Id" source="contenttypeId" />
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Modifieddate" source="modifieddate" />
        <TextField label="Modifiedby" source="modifiedby" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
