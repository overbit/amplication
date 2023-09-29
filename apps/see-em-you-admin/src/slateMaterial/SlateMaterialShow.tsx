import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateMaterialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Application Slate Guid"
          source="applicationSlateGuid"
        />
        <TextField label="Email" source="email" />
        <TextField label="File Name" source="fileName" />
        <TextField label="Id" source="id" />
        <TextField label="Material Export1" source="materialExport1" />
        <TextField label="Material Name" source="materialName" />
        <TextField label="Name" source="name" />
      </SimpleShowLayout>
    </Show>
  );
};
