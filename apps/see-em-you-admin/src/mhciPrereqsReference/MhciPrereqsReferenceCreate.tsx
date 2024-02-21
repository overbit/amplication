import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  BooleanInput,
  DateTimeInput,
  SelectInput,
} from "react-admin";

export const MhciPrereqsReferenceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Ref User Id" source="refUserId" />
        <TextInput label="Content" source="content" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <BooleanInput label="Submitted" source="submitted" />
        <NumberInput
          step={1}
          label="Reminder Sent Count"
          source="reminderSentCount"
        />
        <DateTimeInput label="Last Reminder Sent" source="lastReminderSent" />
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
        <TextInput label="Anova Comment" source="anovaComment" />
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
        <TextInput label="Regression Comment" source="regressionComment" />
        <NumberInput step={1} label="Period Id" source="periodId" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
