import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const TagMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Tag Instance Id" source="tagInstanceId" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
