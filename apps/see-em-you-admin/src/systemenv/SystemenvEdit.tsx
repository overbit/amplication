import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SystemenvEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <NumberInput step={1} label="Coorduser Id" source="coorduserId" />
        <DateTimeInput label="Expdate" source="expdate" />
        <DateTimeInput label="Expdate2" source="expdate2" />
        <NumberInput label="Appbaseprice" source="appbaseprice" />
        <TextInput label="Sysemail" source="sysemail" />
      </SimpleForm>
    </Edit>
  );
};
