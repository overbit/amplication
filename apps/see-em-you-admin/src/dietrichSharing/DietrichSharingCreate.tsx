import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const DietrichSharingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Sds" source="sds" />
        <NumberInput step={1} label="Tepper" source="tepper" />
      </SimpleForm>
    </Create>
  );
};
