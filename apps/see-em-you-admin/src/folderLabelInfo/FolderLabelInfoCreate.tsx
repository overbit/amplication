import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FolderLabelInfoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Last Label Column"
          source="lastLabelColumn"
        />
        <NumberInput step={1} label="Last Label Row" source="lastLabelRow" />
        <DateTimeInput label="Last Ran Time" source="lastRanTime" />
        <NumberInput step={1} label="Period Id" source="periodId" />
      </SimpleForm>
    </Create>
  );
};
