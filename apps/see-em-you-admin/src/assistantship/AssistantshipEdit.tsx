import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const AssistantshipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Granted" source="granted" />
        <NumberInput step={1} label="Requested" source="requested" />
      </SimpleForm>
    </Edit>
  );
};
