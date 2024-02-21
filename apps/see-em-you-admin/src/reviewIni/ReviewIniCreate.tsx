import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ReviewIniCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <NumberInput step={1} label="Round" source="round" />
        <TextInput label="Technical Comments" source="technicalComments" />
        <TextInput label="Academic Comments" source="academicComments" />
        <TextInput
          label="Academic Program Comments"
          source="academicProgramComments"
        />
        <TextInput label="Research Comments" source="researchComments" />
        <TextInput
          label="Work Experience Comments"
          source="workExperienceComments"
        />
        <TextInput label="Leadership Comments" source="leadershipComments" />
        <TextInput label="Additional Comments" source="additionalComments" />
        <TextInput label="Ug Program Comments" source="ugProgramComments" />
        <NumberInput
          step={1}
          label="Technical Rating"
          source="technicalRating"
        />
        <NumberInput step={1} label="Academic Rating" source="academicRating" />
        <NumberInput step={1} label="Research Rating" source="researchRating" />
        <NumberInput
          step={1}
          label="Work Experience Rating"
          source="workExperienceRating"
        />
        <NumberInput
          step={1}
          label="Leadership Rating"
          source="leadershipRating"
        />
        <NumberInput step={1} label="Overall Rating" source="overallRating" />
        <NumberInput
          step={1}
          label="Alternative Program"
          source="alternativeProgram"
        />
      </SimpleForm>
    </Create>
  );
};
