import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IniYearsExperienceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IniYearsExperiences"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Full Time Professional"
          source="fullTimeProfessional"
        />
        <TextField label="Id" source="id" />
        <TextField label="Relevant Industry" source="relevantIndustry" />
      </Datagrid>
    </List>
  );
};
