import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const UsHsStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <NumberInput step={1} label="Us Hs Grad" source="usHSGrad" />
        <NumberInput step={1} label="Any Us Hs" source="anyUsHs" />
        <NumberInput step={1} label="Pell" source="pell" />
        <NumberInput
          step={1}
          label="Ug Fed Work Study"
          source="ugFedWorkStudy"
        />
        <NumberInput step={1} label="Perm Zip Grad" source="permZipGrad" />
        <NumberInput step={1} label="First Gen" source="firstGen" />
        <NumberInput step={1} label="First Gen Grad" source="firstGenGrad" />
      </SimpleForm>
    </Edit>
  );
};
