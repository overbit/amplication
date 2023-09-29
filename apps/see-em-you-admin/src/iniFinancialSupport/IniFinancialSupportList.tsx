import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const IniFinancialSupportList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"IniFinancialSupports"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField
          label="Apply Outside Support Source"
          source="applyOutsideSupportSource"
        />
        <TextField
          label="Apply Outside Support Type"
          source="applyOutsideSupportType"
        />
        <TextField
          label="Attend Without Support"
          source="attendWithoutSupport"
        />
        <TextField label="Family Support Amount" source="familySupportAmount" />
        <TextField label="Family Support Type" source="familySupportType" />
        <TextField label="Id" source="id" />
        <TextField label="Other Support Source" source="otherSupportSource" />
        <TextField
          label="Receive Outside Support Source"
          source="receiveOutsideSupportSource"
        />
        <TextField
          label="Receive Outside Support Type"
          source="receiveOutsideSupportType"
        />
        <TextField
          label="Request Consideration"
          source="requestConsideration"
        />
      </Datagrid>
    </List>
  );
};
