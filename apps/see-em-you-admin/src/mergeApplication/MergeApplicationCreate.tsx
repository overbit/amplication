import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MergeApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Base Convert Error"
          source="baseConvertError"
        />
        <TextInput label="Base Convert Message" source="baseConvertMessage" />
        <NumberInput
          step={1}
          label="Base Write Error"
          source="baseWriteError"
        />
        <TextInput label="Base Write Message" source="baseWriteMessage" />
        <NumberInput
          step={1}
          label="Search Text Write Error"
          source="searchTextWriteError"
        />
        <TextInput
          label="Search Text Write Message"
          source="searchTextWriteMessage"
        />
      </SimpleForm>
    </Create>
  );
};
