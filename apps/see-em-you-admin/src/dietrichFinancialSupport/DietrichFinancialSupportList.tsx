import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DietrichFinancialSupportList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DietrichFinancialSupports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Id" source="id" />
        <TextField
          label="Interested B2 Training"
          source="interestedB2Training"
        />
        <TextField label="Qualified Assistance" source="qualifiedAssistance" />
        <TextField label="Received Loans" source="receivedLoans" />
        <TextField
          label="Received Scholarships"
          source="receivedScholarships"
        />
        <TextField label="Support Sources" source="supportSources" />
      </Datagrid>
    </List>
  );
};
