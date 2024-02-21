import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const Em2FinancialSupportEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput
          step={1}
          label="Request Consideration"
          source="requestConsideration"
        />
        <NumberInput
          step={1}
          label="Request Assistantship"
          source="requestAssistantship"
        />
        <NumberInput
          step={1}
          label="Attend Without Support"
          source="attendWithoutSupport"
        />
        <TextInput
          label="Receive Outside Support Type"
          source="receiveOutsideSupportType"
        />
        <TextInput
          label="Receive Outside Support Source"
          source="receiveOutsideSupportSource"
        />
        <TextInput
          label="Apply Outside Support Type"
          source="applyOutsideSupportType"
        />
        <TextInput
          label="Apply Outside Support Source"
          source="applyOutsideSupportSource"
        />
        <TextInput label="Other Support Source" source="otherSupportSource" />
        <TextInput label="Family Support Type" source="familySupportType" />
        <TextInput label="Family Support Amount" source="familySupportAmount" />
      </SimpleForm>
    </Edit>
  );
};
