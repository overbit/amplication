import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const VoucherList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Vouchers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <BooleanField label="Active" source="active" />
        <BooleanField label="Allow Multiple" source="allowMultiple" />
        <TextField label="Pretty Code" source="prettyCode" />
        <TextField label="Prog" source="prog" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
