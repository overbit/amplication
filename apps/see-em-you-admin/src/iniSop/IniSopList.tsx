import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IniSopList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IniSops"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Additional Info" source="additionalInfo" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Background" source="background" />
        <TextField label="Id" source="id" />
        <TextField
          label="Leadership Experience"
          source="leadershipExperience"
        />
        <TextField label="Objective" source="objective" />
        <TextField label="Research Experience" source="researchExperience" />
        <TextField label="Sfs Interest" source="sfsInterest" />
      </Datagrid>
    </List>
  );
};
