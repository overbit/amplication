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
        <TextField label="Rec User Id" source="recUserId" />
        <TextField label="Content" source="content" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Lang Prof Rec Id" source="langProfRecId" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Reminder Sent Count" source="reminderSentCount" />
        <TextField label="Last Reminder Sent" source="lastReminderSent" />
        <TextField
          label="Language Specialization"
          source="languageSpecialization"
        />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
