import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SlateEmployShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Job1 From" source="job1From" />
        <TextField label="Job1 Organization" source="job1Organization" />
        <TextField label="Job1 To" source="job1To" />
        <TextField label="Job2 From" source="job2From" />
        <TextField label="Job2 Organization" source="job2Organization" />
        <TextField label="Job2 To" source="job2To" />
        <TextField label="Job3 From" source="job3From" />
        <TextField label="Job3 Organization" source="job3Organization" />
        <TextField label="Job3 To" source="job3To" />
        <TextField
          label="Job Num1 Years Of Experience"
          source="jobNum1YearsOfExperience"
        />
        <TextField
          label="Job Num2 Years Of Experience"
          source="jobNum2YearsOfExperience"
        />
        <TextField
          label="Job Num3 Years Of Experience"
          source="jobNum3YearsOfExperience"
        />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
      </SimpleShowLayout>
    </Show>
  );
};
