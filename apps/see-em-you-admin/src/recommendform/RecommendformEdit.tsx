import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const RecommendformEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Form Id" source="formId" />
        <NumberInput step={1} label="Question Id" source="questionId" />
        <NumberInput step={1} label="Question Key" source="questionKey" />
        <NumberInput step={1} label="Recommend Id" source="recommendId" />
        <TextInput label="Response" source="response" />
      </SimpleForm>
    </Edit>
  );
};
