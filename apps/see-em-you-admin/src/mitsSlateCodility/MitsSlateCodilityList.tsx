import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MitsSlateCodilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MitsSlateCodilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Codility Close Date" source="codilityCloseDate" />
        <TextField label="Codility Create Date" source="codilityCreateDate" />
        <TextField label="Codility Ip Addresses" source="codilityIpAddresses" />
        <TextField label="Codility Max Score" source="codilityMaxScore" />
        <TextField
          label="Codility Percent Correctness"
          source="codilityPercentCorrectness"
        />
        <TextField
          label="Codility Percent Performance"
          source="codilityPercentPerformance"
        />
        <TextField
          label="Codility Percent Total Score"
          source="codilityPercentTotalScore"
        />
        <TextField label="Codility Score" source="codilityScore" />
        <TextField label="Codility Similarity" source="codilitySimilarity" />
        <TextField label="Codility Start Date" source="codilityStartDate" />
        <TextField
          label="Codility Task1 Correctness"
          source="codilityTask1Correctness"
        />
        <TextField
          label="Codility Task1 Difficulty"
          source="codilityTask1Difficulty"
        />
        <TextField
          label="Codility Task1 Language"
          source="codilityTask1Language"
        />
        <TextField label="Codility Task1 Name" source="codilityTask1Name" />
        <TextField
          label="Codility Task1 Performance"
          source="codilityTask1Performance"
        />
        <TextField label="Codility Task1 Score" source="codilityTask1Score" />
        <TextField
          label="Codility Task2 Correctness"
          source="codilityTask2Correctness"
        />
        <TextField
          label="Codility Task2 Difficulty"
          source="codilityTask2Difficulty"
        />
        <TextField
          label="Codility Task2 Language"
          source="codilityTask2Language"
        />
        <TextField label="Codility Task2 Name" source="codilityTask2Name" />
        <TextField
          label="Codility Task2 Performance"
          source="codilityTask2Performance"
        />
        <TextField label="Codility Task2 Score" source="codilityTask2Score" />
        <TextField
          label="Codility Task3 Correctness"
          source="codilityTask3Correctness"
        />
        <TextField
          label="Codility Task3 Difficulty"
          source="codilityTask3Difficulty"
        />
        <TextField
          label="Codility Task3 Language"
          source="codilityTask3Language"
        />
        <TextField label="Codility Task3 Name" source="codilityTask3Name" />
        <TextField
          label="Codility Task3 Performance"
          source="codilityTask3Performance"
        />
        <TextField label="Codility Task3 Score" source="codilityTask3Score" />
        <TextField
          label="Codility Task4 Correctness"
          source="codilityTask4Correctness"
        />
        <TextField
          label="Codility Task4 Difficulty"
          source="codilityTask4Difficulty"
        />
        <TextField
          label="Codility Task4 Language"
          source="codilityTask4Language"
        />
        <TextField label="Codility Task4 Name" source="codilityTask4Name" />
        <TextField
          label="Codility Task4 Performance"
          source="codilityTask4Performance"
        />
        <TextField label="Codility Task4 Score" source="codilityTask4Score" />
        <TextField label="Codility Test Name" source="codilityTestName" />
        <TextField label="Codility Test Session" source="codilityTestSession" />
        <TextField label="First" source="first" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
      </Datagrid>
    </List>
  );
};
