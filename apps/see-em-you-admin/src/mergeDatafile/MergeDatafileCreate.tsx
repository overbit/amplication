import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const MergeDatafileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Merge Id" source="mergeId" />
        <NumberInput step={1} label="Datafileinfo Id" source="datafileinfoId" />
        <BooleanInput label="Converted" source="converted" />
        <NumberInput step={1} label="Convert Error" source="convertError" />
        <TextInput label="Convert Message" source="convertMessage" />
        <TextInput label="Merge Filename" source="mergeFilename" />
        <BooleanInput label="Merged" source="merged" />
        <NumberInput step={1} label="Merge Error" source="mergeError" />
        <TextInput label="Merge Message" source="mergeMessage" />
      </SimpleForm>
    </Create>
  );
};
