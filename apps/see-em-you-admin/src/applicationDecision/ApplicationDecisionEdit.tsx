import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplicationDecisionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Admission Program Id"
          source="admissionProgramId"
        />
        <TextInput label="Admission Status" source="admissionStatus" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput
          step={1}
          label="Attend Other University"
          source="attendOtherUniversity"
        />
        <TextInput label="Comments" source="comments" />
        <TextInput label="Other Choice Location" source="otherChoiceLocation" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Visit Campus" source="visitCampus" />
        <NumberInput step={1} label="Visit Comments" source="visitComments" />
        <NumberInput step={1} label="Visit Helpful" source="visitHelpful" />
      </SimpleForm>
    </Edit>
  );
};
