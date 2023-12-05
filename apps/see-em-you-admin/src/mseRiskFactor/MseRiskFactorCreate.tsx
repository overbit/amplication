import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MseRiskFactorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Academic" source="academic" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Experience" source="experience" />
        <NumberInput step={1} label="Language" source="language" />
        <NumberInput step={1} label="Other" source="other" />
        <TextInput label="Other Text" source="otherText" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
      </SimpleForm>
    </Create>
  );
};
