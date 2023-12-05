import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const GmatscoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <NumberInput
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput
          step={1}
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <NumberInput
          step={1}
          label="Quantitativescore"
          source="quantitativescore"
        />
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput
          step={1}
          label="Totalpercentile"
          source="totalpercentile"
        />
        <NumberInput step={1} label="Totalscore" source="totalscore" />
        <NumberInput
          step={1}
          label="Verbalpercentile"
          source="verbalpercentile"
        />
        <NumberInput step={1} label="Verbalscore" source="verbalscore" />
      </SimpleForm>
    </Create>
  );
};
