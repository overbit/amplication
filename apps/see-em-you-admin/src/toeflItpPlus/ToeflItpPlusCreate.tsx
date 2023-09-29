import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ToeflItpPlusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Listeningscore" source="listeningscore" />
        <NumberInput step={1} label="Overallscore" source="overallscore" />
        <NumberInput step={1} label="Readingscore" source="readingscore" />
        <NumberInput step={1} label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Test Email" source="testEmail" />
        <TextInput label="Url" source="url" />
        <NumberInput step={1} label="Writingscore" source="writingscore" />
      </SimpleForm>
    </Create>
  );
};
