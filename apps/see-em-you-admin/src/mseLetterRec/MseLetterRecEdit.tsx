import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MseLetterRecEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Algortihms" source="algortihms" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Data Structures" source="dataStructures" />
        <NumberInput step={1} label="Discrete" source="discrete" />
        <NumberInput step={1} label="Java" source="java" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
      </SimpleForm>
    </Edit>
  );
};
