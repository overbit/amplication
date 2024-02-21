import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const MseCodilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseCodilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Id" source="id" />
        <TextField label="Test Session Id" source="testSessionId" />
        <TextField label="Test" source="test" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Nick" source="nick" />
        <TextField label="Email" source="email" />
        <TextField label="Phone" source="phone" />
        <TextField label="Last School Attended" source="lastSchoolAttended" />
        <TextField label="Field Of Study" source="fieldOfStudy" />
        <TextField label="Academic Degree" source="academicDegree" />
        <TextField
          label="Programming Experience"
          source="programmingExperience"
        />
        <TextField label="Profile Url" source="profileUrl" />
        <TextField label="Create Date" source="createDate" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Close Date" source="closeDate" />
        <TextField label="Ips" source="ips" />
        <TextField label="Total Score" source="totalScore" />
        <TextField label="Max Score" source="maxScore" />
        <TextField label="Percent Total Score" source="percentTotalScore" />
        <TextField label="Percent Correctness" source="percentCorrectness" />
        <TextField label="Percent Performance" source="percentPerformance" />
        <TextField label="Time Used" source="timeUsed" />
        <TextField label="Similarity Check" source="similarityCheck" />
        <TextField label="Task1 Name" source="task1Name" />
        <TextField label="Task1 Score" source="task1Score" />
        <TextField label="Task1 Correctness" source="task1Correctness" />
        <TextField label="Task1 Performance" source="task1Performance" />
        <TextField label="Task2 Name" source="task2Name" />
        <TextField label="Task2 Score" source="task2Score" />
        <TextField label="Task2 Correctness" source="task2Correctness" />
        <TextField label="Task2 Performance" source="task2Performance" />
        <TextField label="Task3 Name" source="task3Name" />
        <TextField label="Task3 Score" source="task3Score" />
        <TextField label="Task3 Correctness" source="task3Correctness" />
        <TextField label="Task3 Performance" source="task3Performance" />
        <TextField label="Task4 Name" source="task4Name" />
        <TextField label="Task4 Score" source="task4Score" />
        <TextField label="Task4 Correctness" source="task4Correctness" />
        <TextField label="Task4 Performance" source="task4Performance" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
