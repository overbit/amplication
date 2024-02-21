import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  BooleanInput,
  TextInput,
} from "react-admin";

export const ToeflCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput step={1} label="Section1" source="section1" />
        <NumberInput step={1} label="Section2" source="section2" />
        <NumberInput step={1} label="Section3" source="section3" />
        <NumberInput label="Essay" source="essay" />
        <NumberInput step={1} label="Total" source="total" />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <TextInput label="Type Field" source="typeField" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Section1mb" source="section1mb" />
        <NumberInput step={1} label="Section2mb" source="section2mb" />
        <NumberInput step={1} label="Section3mb" source="section3mb" />
        <NumberInput step={1} label="Essaymb" source="essaymb" />
        <NumberInput step={1} label="Totalmb" source="totalmb" />
        <TextInput label="Toefl Email" source="toeflEmail" />
        <TextInput label="Toefl Paper Email" source="toeflPaperEmail" />
      </SimpleForm>
    </Create>
  );
};
