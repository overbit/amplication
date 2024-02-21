import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const GmatscoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Scorereceived" source="scorereceived" />
        <DateTimeInput label="Testdate" source="testdate" />
        <NumberInput step={1} label="Verbalscore" source="verbalscore" />
        <NumberInput
          step={1}
          label="Verbalpercentile"
          source="verbalpercentile"
        />
        <NumberInput
          step={1}
          label="Quantitativescore"
          source="quantitativescore"
        />
        <NumberInput
          step={1}
          label="Quantitativepercentile"
          source="quantitativepercentile"
        />
        <NumberInput step={1} label="Totalscore" source="totalscore" />
        <NumberInput
          step={1}
          label="Totalpercentile"
          source="totalpercentile"
        />
        <NumberInput
          label="Analyticalwritingscore"
          source="analyticalwritingscore"
        />
        <NumberInput
          step={1}
          label="Analyticalwritingpercentile"
          source="analyticalwritingpercentile"
        />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
