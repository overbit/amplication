import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ToeflCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput label="Essay" source="essay" />
        <NumberInput step={1} label="Essaymb" source="essaymb" />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <NumberInput step={1} label="Section1" source="section1" />
        <NumberInput step={1} label="Section1mb" source="section1mb" />
        <NumberInput step={1} label="Section2" source="section2" />
        <NumberInput step={1} label="Section2mb" source="section2mb" />
        <NumberInput step={1} label="Section3" source="section3" />
        <NumberInput step={1} label="Section3mb" source="section3mb" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Toefl Email" source="toeflEmail" />
        <TextInput label="Toefl Paper Email" source="toeflPaperEmail" />
        <NumberInput step={1} label="Total" source="total" />
        <NumberInput step={1} label="Totalmb" source="totalmb" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
