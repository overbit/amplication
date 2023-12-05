import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MseLetterRecsDecisionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Algorithms" source="algorithms" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Data Structures" source="dataStructures" />
        <NumberInput step={1} label="Discrete" source="discrete" />
        <NumberInput step={1} label="Java" source="java" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Edit>
  );
};
