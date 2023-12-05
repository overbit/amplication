import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const WaiverApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Org Id" source="orgId" />
      </SimpleForm>
    </Create>
  );
};
