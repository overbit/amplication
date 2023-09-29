import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const MseBridgeCourseDecisionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Course Id" source="courseId" />
        <NumberInput step={1} label="Program Id" source="programId" />
      </SimpleForm>
    </Create>
  );
};
