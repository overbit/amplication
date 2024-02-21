import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MseRiskFactorsDecisionList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MseRiskFactorsDecisions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Experience" source="experience" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Program Id" source="programId" />
        <TextField label="Language" source="language" />
        <TextField label="Academic" source="academic" />
        <TextField label="Other" source="other" />
        <TextField label="Other Text" source="otherText" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
