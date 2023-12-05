import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const MhciPrereqsReferenceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Anova Comment" source="anovaComment" />
        <SelectInput
          source="anova_knowledge"
          label="Anova Knowledge"
          choices={[
            { label: "No_knowledge", value: "No_knowledge" },
            { label: "Not_confident", value: "Not_confident" },
            { label: "Direct_knowledge", value: "Direct_knowledge" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
        <NumberInput step={1} label="Ref User Id" source="refUserId" />
        <TextInput label="Regression Comment" source="regressionComment" />
        <SelectInput
          source="regression_knowledge"
          label="Regression Knowledge"
          choices={[
            { label: "No_knowledge", value: "No_knowledge" },
            { label: "Not_confident", value: "Not_confident" },
            { label: "Direct_knowledge", value: "Direct_knowledge" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          step={1}
          label="Reminder Sent Count"
          source="reminderSentCount"
        />
        <BooleanInput label="Submitted" source="submitted" />
      </SimpleForm>
    </Edit>
  );
};
