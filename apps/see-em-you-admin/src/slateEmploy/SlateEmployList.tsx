import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SlateEmployList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SlateEmploys"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
