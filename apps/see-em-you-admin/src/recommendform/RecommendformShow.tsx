import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RecommendformShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Form Id" source="formId" />
        <TextField label="Id" source="id" />
        <TextField label="Question Id" source="questionId" />
        <TextField label="Question Key" source="questionKey" />
        <TextField label="Recommend Id" source="recommendId" />
        <TextField label="Response" source="response" />
      </SimpleShowLayout>
    </Show>
  );
};
