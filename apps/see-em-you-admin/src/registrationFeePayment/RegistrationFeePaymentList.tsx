import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const RegistrationFeePaymentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RegistrationFeePayments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
        <DateField source="lastModTime" label="Last Mod Time" />
        <TextField label="Last Mod User Id" source="lastModUserId" />
        <TextField label="Payment Amount" source="paymentAmount" />
        <TextField label="Payment Intent Date" source="paymentIntentDate" />
        <TextField label="Payment Status" source="payment_status" />
        <TextField label="Payment Type" source="paymentType" />
      </Datagrid>
    </List>
  );
};
