import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const ToeflShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Essay" source="essay" />
        <TextField label="Essaymb" source="essaymb" />
        <TextField label="Id" source="id" />
        <BooleanField label="Scorereceived" source="scorereceived" />
        <TextField label="Section1" source="section1" />
        <TextField label="Section1mb" source="section1mb" />
        <TextField label="Section2" source="section2" />
        <TextField label="Section2mb" source="section2mb" />
        <TextField label="Section3" source="section3" />
        <TextField label="Section3mb" source="section3mb" />
        <TextField label="Testdate" source="testdate" />
        <TextField label="Toefl Email" source="toeflEmail" />
        <TextField label="Toefl Paper Email" source="toeflPaperEmail" />
        <TextField label="Total" source="total" />
        <TextField label="Totalmb" source="totalmb" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
