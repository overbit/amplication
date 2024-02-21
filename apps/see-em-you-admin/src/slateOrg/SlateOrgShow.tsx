import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateOrgShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Status" source="status" />
        <TextField label="Local Name" source="localName" />
        <TextField label="Shared Name" source="sharedName" />
        <TextField label="Street" source="street" />
        <TextField label="City" source="city" />
        <TextField label="Region" source="region" />
        <TextField label="Postal" source="postal" />
        <TextField label="Country" source="country" />
        <TextField label="Category" source="category" />
        <TextField label="Org Type" source="orgType" />
        <TextField
          label="Num Records With School Key In Database"
          source="numRecordsWithSchoolKeyInDatabase"
        />
        <TextField
          label="Num Active Applications With School Key In Database"
          source="numActiveApplicationsWithSchoolKeyInDatabase"
        />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
