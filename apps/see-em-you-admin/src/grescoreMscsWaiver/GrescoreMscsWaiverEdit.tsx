import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const GrescoreMscsWaiverEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Waiver Agree" source="waiverAgree" />
      </SimpleForm>
    </Edit>
  );
};
