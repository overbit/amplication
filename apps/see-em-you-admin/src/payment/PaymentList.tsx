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
import { PAYMENTVOUCHER_TITLE_FIELD } from "../paymentVoucher/PaymentVoucherTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Payment Id" source="paymentId" />
        <TextField label="Payment Type" source="paymentType" />
        <TextField label="Payment Amount" source="paymentAmount" />
        <TextField label="Payment Intent Date" source="paymentIntentDate" />
        <TextField label="Payment Status" source="payment_status" />
        <DateField source="lastModTime" label="Last Mod Time" />
        <TextField label="Last Mod User Id" source="lastModUserId" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Payment Voucher"
          source="paymentvoucher.id"
          reference="PaymentVoucher"
        >
          <TextField source={PAYMENTVOUCHER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
