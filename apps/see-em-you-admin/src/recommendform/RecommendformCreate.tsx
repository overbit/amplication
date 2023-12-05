import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RecommendformCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Form Id" source="formId" />
        <NumberInput step={1} label="Question Id" source="questionId" />
        <NumberInput step={1} label="Question Key" source="questionKey" />
        <NumberInput step={1} label="Recommend Id" source="recommendId" />
        <TextInput label="Response" source="response" />
      </SimpleForm>
    </Create>
  );
};
