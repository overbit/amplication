import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniAdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Comments" source="comments" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput step={1} label="Round" source="round" />
      </SimpleForm>
    </Edit>
  );
};
