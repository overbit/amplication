import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
} from "react-admin";

export const UsersinstShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="User Id" source="userId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Institute Id" source="instituteId" />
        <TextField label="College Name" source="collegeName" />
        <TextField label="Date Entered" source="dateEntered" />
        <TextField label="Date Grad" source="dateGrad" />
        <TextField label="Date Left" source="dateLeft" />
        <TextField label="Degree" source="degree" />
        <TextField label="Degree Level" source="degreeLevel" />
        <TextField label="Degree Level Other" source="degreeLevelOther" />
        <TextField label="Major1" source="major1" />
        <TextField label="Major2" source="major2" />
        <TextField label="Major3" source="major3" />
        <TextField label="Minor1" source="minor1" />
        <TextField label="Minor2" source="minor2" />
        <TextField label="Gpa" source="gpa" />
        <TextField label="Gpa Major" source="gpaMajor" />
        <TextField label="Gpa Scale" source="gpaScale" />
        <BooleanField
          label="Transscriptreceived"
          source="transscriptreceived"
        />
        <TextField label="Datafile Id" source="datafileId" />
        <TextField label="Educationtype" source="educationtype" />
        <TextField label="Class Rank" source="classRank" />
        <TextField label="Converted Gpa" source="convertedGpa" />
        <TextField label="Joint" source="joint" />
        <TextField label="Joint Institute Id" source="jointInstituteId" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
