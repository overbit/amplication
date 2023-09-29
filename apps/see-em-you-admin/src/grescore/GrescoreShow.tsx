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
        <TextField label="Analyticalpercentile" source="analyticalpercentile" />
        <TextField label="Analyticalscore" source="analyticalscore" />
        <TextField
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <TextField
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Athome" source="athome" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Gre Email" source="greEmail" />
        <TextField label="Id" source="id" />
        <TextField
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <TextField label="Quantitativescore" source="quantitativescore" />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Verbalpercentile" source="verbalpercentile" />
        <TextField label="Verbalscore" source="verbalscore" />
      </SimpleShowLayout>
    </Show>
  );
};
