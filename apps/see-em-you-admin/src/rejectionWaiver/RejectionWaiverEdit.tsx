import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const RejectionWaiverEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Lu Application Programs Id"
          source="luApplicationProgramsId"
        />
        <NumberInput
          step={1}
          label="Permitted Program Id"
          source="permittedProgramId"
        />
        <NumberInput step={1} label="Waived" source="waived" />
      </SimpleForm>
    </Edit>
  );
};
