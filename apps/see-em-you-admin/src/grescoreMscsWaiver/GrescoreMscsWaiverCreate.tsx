import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const GrescoreMscsWaiverCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Waiver Agree" source="waiverAgree" />
      </SimpleForm>
    </Create>
  );
};
