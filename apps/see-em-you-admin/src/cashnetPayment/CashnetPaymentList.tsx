import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const CashnetPaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CashnetPayments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Transaction Id" source="transactionId" />
        <TextField label="Applicant Name" source="applicantName" />
        <TextField label="Applicant Email" source="applicantEmail" />
        <TextField label="Merchant" source="merchant" />
        <TextField label="Status" source="status" />
        <DateField source="transactionTime" label="Transaction Time" />
        <TextField label="Transaction Type" source="transactionType" />
        <TextField label="Amount" source="amount" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
