import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateOrgsAllShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Local Name" source="localName" />
        <TextField label="Shared Name" source="sharedName" />
        <TextField label="Slate Orgs All Id" source="slateOrgsAllId" />
        <TextField label="Name" source="name" />
        <TextField label="Aw Id" source="awId" />
        <TextField label="Aw Name" source="awName" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
