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
        <NumberInput label="Appbaseprice" source="appbaseprice" />
        <NumberInput step={1} label="Coorduser Id" source="coorduserId" />
        <NumberInput step={1} label="Domain Id" source="domainId" />
        <DateTimeInput label="Expdate" source="expdate" />
        <DateTimeInput label="Expdate2" source="expdate2" />
        <TextInput label="Sysemail" source="sysemail" />
      </SimpleForm>
    </Edit>
  );
};
