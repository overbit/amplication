import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FolderLabelInfoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
