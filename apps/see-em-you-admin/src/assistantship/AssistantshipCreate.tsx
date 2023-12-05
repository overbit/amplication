import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const AssistantshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Granted" source="granted" />
        <NumberInput step={1} label="Requested" source="requested" />
      </SimpleForm>
    </Create>
  );
};
