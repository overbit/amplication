import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const MergeDatafileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Converted" source="converted" />
        <NumberInput step={1} label="Convert Error" source="convertError" />
        <TextInput label="Convert Message" source="convertMessage" />
        <NumberInput step={1} label="Datafileinfo Id" source="datafileinfoId" />
        <BooleanInput label="Merged" source="merged" />
        <NumberInput step={1} label="Merge Error" source="mergeError" />
        <TextInput label="Merge Filename" source="mergeFilename" />
        <NumberInput step={1} label="Merge Id" source="mergeId" />
        <TextInput label="Merge Message" source="mergeMessage" />
      </SimpleForm>
    </Edit>
  );
};
