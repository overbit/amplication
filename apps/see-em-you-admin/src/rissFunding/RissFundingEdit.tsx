import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const RissFundingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="External Funding" source="externalFunding" />
        <TextInput label="External Source" source="externalSource" />
        <TextInput label="External Amount" source="externalAmount" />
        <BooleanInput label="Reu Scholarship" source="reuScholarship" />
        <BooleanInput label="Direct Funding" source="directFunding" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
