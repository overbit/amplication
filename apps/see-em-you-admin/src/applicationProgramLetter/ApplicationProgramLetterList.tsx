import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplicationProgramLetterList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplicationProgramLetters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Admit Sent" source="admitSent" />
        <TextField label="Admit Sent Date" source="admitSentDate" />
        <TextField label="Id" source="id" />
        <BooleanField label="Rejection Sent" source="rejectionSent" />
        <TextField label="Rejection Sent Date" source="rejectionSentDate" />
        <BooleanField label="Waitlist Sent" source="waitlistSent" />
        <TextField label="Waitlist Sent Date" source="waitlistSentDate" />
      </Datagrid>
    </List>
  );
};
