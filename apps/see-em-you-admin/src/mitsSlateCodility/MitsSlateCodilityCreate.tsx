import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MitsSlateCodilityCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Codility Close Date" source="codilityCloseDate" />
        <TextInput label="Codility Create Date" source="codilityCreateDate" />
        <TextInput label="Codility Ip Addresses" source="codilityIpAddresses" />
        <TextInput label="Codility Max Score" source="codilityMaxScore" />
        <TextInput
          label="Codility Percent Correctness"
          source="codilityPercentCorrectness"
        />
        <TextInput
          label="Codility Percent Performance"
          source="codilityPercentPerformance"
        />
        <TextInput
          label="Codility Percent Total Score"
          source="codilityPercentTotalScore"
        />
        <TextInput label="Codility Score" source="codilityScore" />
        <TextInput label="Codility Similarity" source="codilitySimilarity" />
        <TextInput label="Codility Start Date" source="codilityStartDate" />
        <TextInput
          label="Codility Task1 Correctness"
          source="codilityTask1Correctness"
        />
        <TextInput
          label="Codility Task1 Difficulty"
          source="codilityTask1Difficulty"
        />
        <TextInput
          label="Codility Task1 Language"
          source="codilityTask1Language"
        />
        <TextInput label="Codility Task1 Name" source="codilityTask1Name" />
        <TextInput
          label="Codility Task1 Performance"
          source="codilityTask1Performance"
        />
        <TextInput label="Codility Task1 Score" source="codilityTask1Score" />
        <TextInput
          label="Codility Task2 Correctness"
          source="codilityTask2Correctness"
        />
        <TextInput
          label="Codility Task2 Difficulty"
          source="codilityTask2Difficulty"
        />
        <TextInput
          label="Codility Task2 Language"
          source="codilityTask2Language"
        />
        <TextInput label="Codility Task2 Name" source="codilityTask2Name" />
        <TextInput
          label="Codility Task2 Performance"
          source="codilityTask2Performance"
        />
        <TextInput label="Codility Task2 Score" source="codilityTask2Score" />
        <TextInput
          label="Codility Task3 Correctness"
          source="codilityTask3Correctness"
        />
        <TextInput
          label="Codility Task3 Difficulty"
          source="codilityTask3Difficulty"
        />
        <TextInput
          label="Codility Task3 Language"
          source="codilityTask3Language"
        />
        <TextInput label="Codility Task3 Name" source="codilityTask3Name" />
        <TextInput
          label="Codility Task3 Performance"
          source="codilityTask3Performance"
        />
        <TextInput label="Codility Task3 Score" source="codilityTask3Score" />
        <TextInput
          label="Codility Task4 Correctness"
          source="codilityTask4Correctness"
        />
        <TextInput
          label="Codility Task4 Difficulty"
          source="codilityTask4Difficulty"
        />
        <TextInput
          label="Codility Task4 Language"
          source="codilityTask4Language"
        />
        <TextInput label="Codility Task4 Name" source="codilityTask4Name" />
        <TextInput
          label="Codility Task4 Performance"
          source="codilityTask4Performance"
        />
        <TextInput label="Codility Task4 Score" source="codilityTask4Score" />
        <TextInput label="Codility Test Name" source="codilityTestName" />
        <TextInput label="Codility Test Session" source="codilityTestSession" />
        <TextInput label="First" source="first" />
        <TextInput label="Last" source="last" />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Prefix" source="prefix" />
      </SimpleForm>
    </Create>
  );
};
