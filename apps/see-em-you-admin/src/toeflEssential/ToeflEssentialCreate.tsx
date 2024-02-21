import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ToeflEssentialCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Test Email" source="testEmail" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput step={1} label="Listeningscore" source="listeningscore" />
        <NumberInput step={1} label="Readingscore" source="readingscore" />
        <NumberInput step={1} label="Writingscore" source="writingscore" />
        <NumberInput step={1} label="Speakingscore" source="speakingscore" />
        <NumberInput label="Overallscore" source="overallscore" />
        <TextInput label="Url" source="url" />
        <NumberInput step={1} label="Scorereceived" source="scorereceived" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput
          step={1}
          label="Listeningscoremb"
          source="listeningscoremb"
        />
        <NumberInput step={1} label="Readingscoremb" source="readingscoremb" />
        <NumberInput step={1} label="Writingscoremb" source="writingscoremb" />
        <NumberInput
          step={1}
          label="Speakingscoremb"
          source="speakingscoremb"
        />
        <NumberInput label="Overallscoremb" source="overallscoremb" />
      </SimpleForm>
    </Create>
  );
};
