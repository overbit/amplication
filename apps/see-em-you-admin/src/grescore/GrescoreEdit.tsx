import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

export const GrescoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Analyticalpercentile" source="analyticalpercentile" />
        <TextInput label="Analyticalscore" source="analyticalscore" />
        <TextInput
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <NumberInput
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Athome" source="athome" />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <TextInput label="Gre Email" source="greEmail" />
        <TextInput
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextInput label="Quantitativescore" source="quantitativescore" />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
        <TextInput label="Verbalpercentile" source="verbalpercentile" />
        <TextInput label="Verbalscore" source="verbalscore" />
      </SimpleForm>
    </Edit>
  );
};
