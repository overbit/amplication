import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlateOrgCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Category" source="category" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <TextInput label="Local Name" source="localName" />
        <TextInput
          label="Num Active Applications With School Key In Database"
          source="numActiveApplicationsWithSchoolKeyInDatabase"
        />
        <TextInput
          label="Num Records With School Key In Database"
          source="numRecordsWithSchoolKeyInDatabase"
        />
        <TextInput label="Org Type" source="orgType" />
        <TextInput label="Postal" source="postal" />
        <TextInput label="Region" source="region" />
        <TextInput label="Shared Name" source="sharedName" />
        <TextInput label="Status" source="status" />
        <TextInput label="Street" source="street" />
      </SimpleForm>
    </Create>
  );
};
