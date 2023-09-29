import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DietrichFinancialSupportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput
          step={1}
          label="Interested B2 Training"
          source="interestedB2Training"
        />
        <NumberInput
          step={1}
          label="Qualified Assistance"
          source="qualifiedAssistance"
        />
        <NumberInput step={1} label="Received Loans" source="receivedLoans" />
        <NumberInput
          step={1}
          label="Received Scholarships"
          source="receivedScholarships"
        />
        <TextInput label="Support Sources" source="supportSources" />
      </SimpleForm>
    </Edit>
  );
};
