import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ContentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Content" source="content" />
        <TextField label="Contenttype Id" source="contenttypeId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Domain Id" source="domainId" />
        <TextField label="Id" source="id" />
        <TextField label="Modifiedby" source="modifiedby" />
        <TextField label="Modifieddate" source="modifieddate" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
