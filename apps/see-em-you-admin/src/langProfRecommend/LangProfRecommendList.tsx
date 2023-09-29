import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const LangProfRecommendList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LangProfRecommends"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Id" source="id" />
        <TextField label="Lang Prof Rec Id" source="langProfRecId" />
        <TextField
          label="Language Specialization"
          source="languageSpecialization"
        />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <BooleanField label="Submitted" source="submitted" />
      </Datagrid>
    </List>
  );
};
