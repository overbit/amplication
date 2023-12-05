import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const IniYearsExperienceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
