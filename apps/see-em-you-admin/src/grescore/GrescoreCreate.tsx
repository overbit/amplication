import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  BooleanInput,
} from "react-admin";

export const GrescoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Verbalscore" source="verbalscore" />
        <TextInput label="Verbalpercentile" source="verbalpercentile" />
        <TextInput label="Quantitativescore" source="quantitativescore" />
        <TextInput
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextInput label="Analyticalscore" source="analyticalscore" />
        <TextInput label="Analyticalpercentile" source="analyticalpercentile" />
        <NumberInput
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <TextInput
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Athome" source="athome" />
        <TextInput label="Gre Email" source="greEmail" />
      </SimpleForm>
    </Create>
  );
};
