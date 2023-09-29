import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MitsSlateGreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First" source="first" />
        <TextInput
          label="Gre Analytical Writing"
          source="greAnalyticalWriting"
        />
        <TextInput
          label="Gre Analytical Writing Pct"
          source="greAnalyticalWritingPct"
        />
        <TextInput label="Gre Quantitative" source="greQuantitative" />
        <TextInput label="Gre Quantitative Pct" source="greQuantitativePct" />
        <TextInput label="Gre Verbal" source="greVerbal" />
        <TextInput label="Gre Verbal Pct" source="greVerbalPct" />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Edit>
  );
};
