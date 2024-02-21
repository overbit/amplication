import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseRiskFactorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseRiskFactors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Language" source="language" />
        <TextField label="Experience" source="experience" />
        <TextField label="Academic" source="academic" />
        <TextField label="Other" source="other" />
        <TextField label="Other Text" source="otherText" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
