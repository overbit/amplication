import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MitsSlateGreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First" source="first" />
        <TextField
          label="Gre Analytical Writing"
          source="greAnalyticalWriting"
        />
        <TextField
          label="Gre Analytical Writing Pct"
          source="greAnalyticalWritingPct"
        />
        <TextField label="Gre Quantitative" source="greQuantitative" />
        <TextField label="Gre Quantitative Pct" source="greQuantitativePct" />
        <TextField label="Gre Verbal" source="greVerbal" />
        <TextField label="Gre Verbal Pct" source="greVerbalPct" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
      </SimpleShowLayout>
    </Show>
  );
};
