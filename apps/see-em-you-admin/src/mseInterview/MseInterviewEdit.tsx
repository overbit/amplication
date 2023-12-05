import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MseInterviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="Interview Comments" source="interviewComments" />
        <DateTimeInput label="Interview Date" source="interviewDate" />
        <TextInput label="Interview Type" source="interviewType" />
        <TextInput label="Interview Type Other" source="interviewTypeOther" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
      </SimpleForm>
    </Edit>
  );
};
