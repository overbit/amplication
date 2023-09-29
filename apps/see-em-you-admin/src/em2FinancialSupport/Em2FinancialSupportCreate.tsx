import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const Em2FinancialSupportCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput
          label="Apply Outside Support Source"
          source="applyOutsideSupportSource"
        />
        <TextInput
          label="Apply Outside Support Type"
          source="applyOutsideSupportType"
        />
        <NumberInput
          step={1}
          label="Attend Without Support"
          source="attendWithoutSupport"
        />
        <TextInput label="Family Support Amount" source="familySupportAmount" />
        <TextInput label="Family Support Type" source="familySupportType" />
        <TextInput label="Other Support Source" source="otherSupportSource" />
        <TextInput
          label="Receive Outside Support Source"
          source="receiveOutsideSupportSource"
        />
        <TextInput
          label="Receive Outside Support Type"
          source="receiveOutsideSupportType"
        />
        <NumberInput
          step={1}
          label="Request Assistantship"
          source="requestAssistantship"
        />
        <NumberInput
          step={1}
          label="Request Consideration"
          source="requestConsideration"
        />
      </SimpleForm>
    </Create>
  );
};
