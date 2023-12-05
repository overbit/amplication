import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const SpecialConsiderationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput
          step={1}
          label="Special Consideration"
          source="specialConsideration"
        />
      </SimpleForm>
    </Edit>
  );
};
