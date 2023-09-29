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
        <TextField label="Academic" source="academic" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Experience" source="experience" />
        <TextField label="Id" source="id" />
        <TextField label="Language" source="language" />
        <TextField label="Other" source="other" />
        <TextField label="Other Text" source="otherText" />
        <TextField label="Program Id" source="programId" />
      </Datagrid>
    </List>
  );
};
