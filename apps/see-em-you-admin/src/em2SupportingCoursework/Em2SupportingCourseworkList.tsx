import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const Em2SupportingCourseworkList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Em2SupportingCourseworks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Data Structures Number"
          source="dataStructuresNumber"
        />
        <TextField label="Data Structures Title" source="dataStructuresTitle" />
        <TextField label="Id" source="id" />
        <TextField
          label="Makerkits Description"
          source="makerkitsDescription"
        />
        <TextField
          label="Makerkits Description2"
          source="makerkitsDescription2"
        />
        <TextField label="Msit Experience" source="msitExperience" />
        <TextField
          label="Programming Description"
          source="programmingDescription"
        />
        <TextField
          label="Programming Description2"
          source="programmingDescription2"
        />
        <TextField label="Statistics Number" source="statisticsNumber" />
        <TextField label="Statistics Title" source="statisticsTitle" />
      </Datagrid>
    </List>
  );
};
