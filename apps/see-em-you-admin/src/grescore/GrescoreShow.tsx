import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const GrescoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Verbalscore" source="verbalscore" />
        <TextField label="Verbalpercentile" source="verbalpercentile" />
        <TextField label="Quantitativescore" source="quantitativescore" />
        <TextField
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextField label="Analyticalscore" source="analyticalscore" />
        <TextField label="Analyticalpercentile" source="analyticalpercentile" />
        <TextField
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <TextField
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Athome" source="athome" />
        <TextField label="Gre Email" source="greEmail" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
