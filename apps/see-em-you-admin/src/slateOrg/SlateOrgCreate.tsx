import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlateOrgCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Status" source="status" />
        <TextInput label="Local Name" source="localName" />
        <TextInput label="Shared Name" source="sharedName" />
        <TextInput label="Street" source="street" />
        <TextInput label="City" source="city" />
        <TextInput label="Region" source="region" />
        <TextInput label="Postal" source="postal" />
        <TextInput label="Country" source="country" />
        <TextInput label="Category" source="category" />
        <TextInput label="Org Type" source="orgType" />
        <TextInput
          label="Num Records With School Key In Database"
          source="numRecordsWithSchoolKeyInDatabase"
        />
        <TextInput
          label="Num Active Applications With School Key In Database"
          source="numActiveApplicationsWithSchoolKeyInDatabase"
        />
      </SimpleForm>
    </Create>
  );
};
