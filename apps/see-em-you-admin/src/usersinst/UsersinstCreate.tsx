import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const UsersinstCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="User Id" source="userId" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Institute Id" source="instituteId" />
        <TextInput label="College Name" source="collegeName" />
        <DateTimeInput label="Date Entered" source="dateEntered" />
        <DateTimeInput label="Date Grad" source="dateGrad" />
        <DateTimeInput label="Date Left" source="dateLeft" />
        <TextInput label="Degree" source="degree" />
        <NumberInput step={1} label="Degree Level" source="degreeLevel" />
        <TextInput label="Degree Level Other" source="degreeLevelOther" />
        <TextInput label="Major1" source="major1" />
        <TextInput label="Major2" source="major2" />
        <TextInput label="Major3" source="major3" />
        <TextInput label="Minor1" source="minor1" />
        <TextInput label="Minor2" source="minor2" />
        <TextInput label="Gpa" source="gpa" />
        <TextInput label="Gpa Major" source="gpaMajor" />
        <NumberInput step={1} label="Gpa Scale" source="gpaScale" />
        <BooleanInput
          label="Transscriptreceived"
          source="transscriptreceived"
        />
        <NumberInput step={1} label="Datafile Id" source="datafileId" />
        <NumberInput step={1} label="Educationtype" source="educationtype" />
        <TextInput label="Class Rank" source="classRank" />
        <TextInput label="Converted Gpa" source="convertedGpa" />
        <NumberInput step={1} label="Joint" source="joint" />
        <NumberInput
          step={1}
          label="Joint Institute Id"
          source="jointInstituteId"
        />
      </SimpleForm>
    </Create>
  );
};
