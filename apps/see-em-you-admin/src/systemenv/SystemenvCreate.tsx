import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SystemenvCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Appbaseprice" source="appbaseprice" />
        <NumberInput step={1} label="Coorduser Id" source="coorduserId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <DateTimeInput label="Expdate" source="expdate" />
        <DateTimeInput label="Expdate2" source="expdate2" />
        <TextInput label="Sysemail" source="sysemail" />
      </SimpleForm>
    </Create>
  );
};
