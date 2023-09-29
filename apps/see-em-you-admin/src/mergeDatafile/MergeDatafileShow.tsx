import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
} from "react-admin";

export const MergeDatafileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="Converted" source="converted" />
        <TextField label="Convert Error" source="convertError" />
        <TextField label="Convert Message" source="convertMessage" />
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <TextField label="Id" source="id" />
        <BooleanField label="Merged" source="merged" />
        <TextField label="Merge Error" source="mergeError" />
        <TextField label="Merge Filename" source="mergeFilename" />
        <TextField label="Merge Id" source="mergeId" />
        <TextField label="Merge Message" source="mergeMessage" />
      </SimpleShowLayout>
    </Show>
  );
};
