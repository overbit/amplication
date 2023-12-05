import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SlateEmployEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="First" source="first" />
        <TextInput label="Job1 From" source="job1From" />
        <TextInput label="Job1 Organization" source="job1Organization" />
        <TextInput label="Job1 To" source="job1To" />
        <TextInput label="Job2 From" source="job2From" />
        <TextInput label="Job2 Organization" source="job2Organization" />
        <TextInput label="Job2 To" source="job2To" />
        <TextInput label="Job3 From" source="job3From" />
        <TextInput label="Job3 Organization" source="job3Organization" />
        <TextInput label="Job3 To" source="job3To" />
        <TextInput
          label="Job Num1 Years Of Experience"
          source="jobNum1YearsOfExperience"
        />
        <TextInput
          label="Job Num2 Years Of Experience"
          source="jobNum2YearsOfExperience"
        />
        <TextInput
          label="Job Num3 Years Of Experience"
          source="jobNum3YearsOfExperience"
        />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Edit>
  );
};
