import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const MergeDatafileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Merge Id" source="mergeId" />
        <TextField label="Datafileinfo Id" source="datafileinfoId" />
        <BooleanField label="Converted" source="converted" />
        <TextField label="Convert Error" source="convertError" />
        <TextField label="Convert Message" source="convertMessage" />
        <TextField label="Merge Filename" source="mergeFilename" />
        <BooleanField label="Merged" source="merged" />
        <TextField label="Merge Error" source="mergeError" />
        <TextField label="Merge Message" source="mergeMessage" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
