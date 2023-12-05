import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const CmuAffiliationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Cmu Employee" source="cmuEmployee" />
        <NumberInput
          step={1}
          label="Cmu Student Or Alumnus"
          source="cmuStudentOrAlumnus"
        />
      </SimpleForm>
    </Edit>
  );
};
