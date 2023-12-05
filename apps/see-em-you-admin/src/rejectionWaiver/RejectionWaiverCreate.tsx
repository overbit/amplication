import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const RejectionWaiverCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
