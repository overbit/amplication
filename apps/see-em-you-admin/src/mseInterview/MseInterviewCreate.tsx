import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const MseInterviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <DateTimeInput label="Interview Date" source="interviewDate" />
        <TextInput label="Interview Type" source="interviewType" />
        <TextInput label="Interview Type Other" source="interviewTypeOther" />
        <TextInput label="Interview Comments" source="interviewComments" />
      </SimpleForm>
    </Create>
  );
};
