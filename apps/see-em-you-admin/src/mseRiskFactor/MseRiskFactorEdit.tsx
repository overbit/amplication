import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MseRiskFactorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput step={1} label="Language" source="language" />
        <NumberInput step={1} label="Experience" source="experience" />
        <NumberInput step={1} label="Academic" source="academic" />
        <NumberInput step={1} label="Other" source="other" />
        <TextInput label="Other Text" source="otherText" />
      </SimpleForm>
    </Edit>
  );
};
