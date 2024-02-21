import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const MseAqaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <TextInput label="English Comments" source="englishComments" />
        <TextInput label="Programming Comments" source="programmingComments" />
        <TextInput
          label="Foundational Comments"
          source="foundationalComments"
        />
        <TextInput label="Maturity Comments" source="maturityComments" />
        <TextInput
          label="Understanding Comments"
          source="understandingComments"
        />
        <TextInput label="Experience Comments" source="experienceComments" />
        <NumberInput step={1} label="English Rating" source="englishRating" />
        <NumberInput
          step={1}
          label="Programming Rating"
          source="programmingRating"
        />
        <NumberInput
          step={1}
          label="Foundational Rating"
          source="foundationalRating"
        />
        <NumberInput step={1} label="Maturity Rating" source="maturityRating" />
        <NumberInput
          step={1}
          label="Understanding Rating"
          source="understandingRating"
        />
        <NumberInput
          step={1}
          label="Experience Rating"
          source="experienceRating"
        />
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
