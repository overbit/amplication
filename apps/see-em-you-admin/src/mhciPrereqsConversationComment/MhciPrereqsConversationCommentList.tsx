import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LUUSERSUSERTYPE_TITLE_FIELD } from "../luUsersUsertype/LuUsersUsertypeTitle";
import { MHCIPREREQ_TITLE_FIELD } from "../mhciPrereq/MhciPrereqTitle";

export const MhciPrereqsConversationCommentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MhciPrereqsConversationComments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Comment" source="comment" />
        <TextField label="Id" source="id" />
        <ReferenceField
          label="Lu Users Usertypes"
          source="luusersusertype.id"
          reference="LuUsersUsertype"
        >
          <TextField source={LUUSERSUSERTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Mhci Prereqs"
          source="mhciprereq.id"
          reference="MhciPrereq"
        >
          <TextField source={MHCIPREREQ_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Period Id" source="periodId" />
        <TextField label="Program Id" source="programId" />
        <DateField source="timestamp" label="Timestamp" />
      </Datagrid>
    </List>
  );
};
