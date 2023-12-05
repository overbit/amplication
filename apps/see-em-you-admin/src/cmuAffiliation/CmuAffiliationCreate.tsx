import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const CmuAffiliationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Cmu Employee" source="cmuEmployee" />
        <NumberInput
          step={1}
          label="Cmu Student Or Alumnus"
          source="cmuStudentOrAlumnus"
        />
      </SimpleForm>
    </Create>
  );
};
