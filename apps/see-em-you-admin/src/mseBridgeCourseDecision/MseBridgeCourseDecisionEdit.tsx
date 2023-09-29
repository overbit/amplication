import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MseBridgeCourseDecisionEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Course Id" source="courseId" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Edit>
  );
};
