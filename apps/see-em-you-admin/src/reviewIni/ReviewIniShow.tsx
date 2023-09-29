import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewIniShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Academic Comments" source="academicComments" />
        <TextField
          label="Academic Program Comments"
          source="academicProgramComments"
        />
        <TextField label="Academic Rating" source="academicRating" />
        <TextField label="Additional Comments" source="additionalComments" />
        <TextField label="Alternative Program" source="alternativeProgram" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Id" source="id" />
        <TextField label="Leadership Comments" source="leadershipComments" />
        <TextField label="Leadership Rating" source="leadershipRating" />
        <TextField label="Overall Rating" source="overallRating" />
        <TextField label="Research Comments" source="researchComments" />
        <TextField label="Research Rating" source="researchRating" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Round" source="round" />
        <TextField label="Technical Comments" source="technicalComments" />
        <TextField label="Technical Rating" source="technicalRating" />
        <TextField label="Ug Program Comments" source="ugProgramComments" />
        <TextField
          label="Work Experience Comments"
          source="workExperienceComments"
        />
        <TextField
          label="Work Experience Rating"
          source="workExperienceRating"
        />
      </SimpleShowLayout>
    </Show>
  );
};
