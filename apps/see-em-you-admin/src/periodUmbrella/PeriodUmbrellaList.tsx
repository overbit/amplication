import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PeriodUmbrellaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PeriodUmbrellas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Admission Term" source="admissionTerm" />
        <TextField label="Admission Year" source="admissionYear" />
        <TextField label="Higher Fee Date" source="higherFeeDate" />
        <TextField label="Umbrella Name" source="umbrellaName" />
        <TextField label="Last Payment Date" source="lastPaymentDate" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
