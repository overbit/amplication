import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const WaiverApplicationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Org Id" source="orgId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
      </SimpleForm>
    </Edit>
  );
};
