import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const Em2SopList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Em2Sops"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Additional Info" source="additionalInfo" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Background" source="background" />
        <TextField label="Id" source="id" />
        <TextField label="Objective" source="objective" />
        <TextField label="Research Experience" source="researchExperience" />
        <TextField label="Ta Interest" source="taInterest" />
      </Datagrid>
    </List>
  );
};
