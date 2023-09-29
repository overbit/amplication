import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MitsSlateGreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MitsSlateGres"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="First" source="first" />
        <TextField
          label="Gre Analytical Writing"
          source="greAnalyticalWriting"
        />
        <TextField
          label="Gre Analytical Writing Pct"
          source="greAnalyticalWritingPct"
        />
        <TextField label="Gre Quantitative" source="greQuantitative" />
        <TextField label="Gre Quantitative Pct" source="greQuantitativePct" />
        <TextField label="Gre Verbal" source="greVerbal" />
        <TextField label="Gre Verbal Pct" source="greVerbalPct" />
        <TextField label="Id" source="id" />
        <TextField label="Last" source="last" />
        <TextField label="Middle" source="middle" />
        <TextField label="Prefix" source="prefix" />
      </Datagrid>
    </List>
  );
};
