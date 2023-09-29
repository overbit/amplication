import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DuolingoscoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Duolingodata Id" source="duolingodataId" />
        <DateTimeInput label="Match Date" source="matchDate" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Testemail" source="testemail" />
      </SimpleForm>
    </Create>
  );
};
