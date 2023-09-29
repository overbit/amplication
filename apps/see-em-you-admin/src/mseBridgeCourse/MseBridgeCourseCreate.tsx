import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const MseBridgeCourseCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Course Id" source="courseId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
      </SimpleForm>
    </Create>
  );
};
