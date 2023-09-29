import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ApplicationTitle } from "../application/ApplicationTitle";

export const MseCodilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Academic Degree" source="academicDegree" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <TextInput label="Close Date" source="closeDate" />
        <TextInput label="Create Date" source="createDate" />
        <TextInput label="Email" source="email" />
        <TextInput label="Field Of Study" source="fieldOfStudy" />
        <TextInput label="Ips" source="ips" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Last School Attended" source="lastSchoolAttended" />
        <TextInput label="Max Score" source="maxScore" />
        <TextInput label="Nick" source="nick" />
        <TextInput label="Percent Correctness" source="percentCorrectness" />
        <TextInput label="Percent Performance" source="percentPerformance" />
        <TextInput label="Percent Total Score" source="percentTotalScore" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="Profile Url" source="profileUrl" />
        <TextInput
          label="Programming Experience"
          source="programmingExperience"
        />
        <TextInput label="Similarity Check" source="similarityCheck" />
        <TextInput label="Start Date" source="startDate" />
        <TextInput label="Task1 Correctness" source="task1Correctness" />
        <TextInput label="Task1 Name" source="task1Name" />
        <TextInput label="Task1 Performance" source="task1Performance" />
        <TextInput label="Task1 Score" source="task1Score" />
        <TextInput label="Task2 Correctness" source="task2Correctness" />
        <TextInput label="Task2 Name" source="task2Name" />
        <TextInput label="Task2 Performance" source="task2Performance" />
        <TextInput label="Task2 Score" source="task2Score" />
        <TextInput label="Task3 Correctness" source="task3Correctness" />
        <TextInput label="Task3 Name" source="task3Name" />
        <TextInput label="Task3 Performance" source="task3Performance" />
        <TextInput label="Task3 Score" source="task3Score" />
        <TextInput label="Task4 Correctness" source="task4Correctness" />
        <TextInput label="Task4 Name" source="task4Name" />
        <TextInput label="Task4 Performance" source="task4Performance" />
        <TextInput label="Task4 Score" source="task4Score" />
        <TextInput label="Test" source="test" />
        <TextInput label="Test Session Id" source="testSessionId" />
        <TextInput label="Time Used" source="timeUsed" />
        <TextInput label="Total Score" source="totalScore" />
      </SimpleForm>
    </Create>
  );
};
