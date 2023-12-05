import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplicationDecisionIniEdit = (
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
        <NumberInput
          step={1}
          label="Admission Status"
          source="admissionStatus"
        />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Choice" source="choice" />
        <TextInput label="Comments" source="comments" />
        <NumberInput label="Scholarship Amt" source="scholarshipAmt" />
        <TextInput label="Scholarship Comments" source="scholarshipComments" />
      </SimpleForm>
    </Edit>
  );
};
