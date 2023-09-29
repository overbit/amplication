import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RissFundingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <BooleanInput label="Direct Funding" source="directFunding" />
        <TextInput label="External Amount" source="externalAmount" />
        <BooleanInput label="External Funding" source="externalFunding" />
        <TextInput label="External Source" source="externalSource" />
        <BooleanInput label="Reu Scholarship" source="reuScholarship" />
      </SimpleForm>
    </Create>
  );
};
