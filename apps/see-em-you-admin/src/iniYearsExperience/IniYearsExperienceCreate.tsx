import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const IniYearsExperienceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput
          step={1}
          label="Full Time Professional"
          source="fullTimeProfessional"
        />
        <NumberInput
          step={1}
          label="Relevant Industry"
          source="relevantIndustry"
        />
      </SimpleForm>
    </Create>
  );
};
