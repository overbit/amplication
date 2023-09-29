import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DuolingoscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Duolingodata Id" source="duolingodataId" />
        <DateTimeInput label="Match Date" source="matchDate" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Testemail" source="testemail" />
      </SimpleForm>
    </Edit>
  );
};
