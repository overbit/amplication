import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ReviewIniEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Academic Comments" source="academicComments" />
        <TextInput
          label="Academic Program Comments"
          source="academicProgramComments"
        />
        <NumberInput step={1} label="Academic Rating" source="academicRating" />
        <TextInput label="Additional Comments" source="additionalComments" />
        <NumberInput
          step={1}
          label="Alternative Program"
          source="alternativeProgram"
        />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Leadership Comments" source="leadershipComments" />
        <NumberInput
          step={1}
          label="Leadership Rating"
          source="leadershipRating"
        />
        <NumberInput step={1} label="Overall Rating" source="overallRating" />
        <TextInput label="Research Comments" source="researchComments" />
        <NumberInput step={1} label="Research Rating" source="researchRating" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput step={1} label="Round" source="round" />
        <TextInput label="Technical Comments" source="technicalComments" />
        <NumberInput
          step={1}
          label="Technical Rating"
          source="technicalRating"
        />
        <TextInput label="Ug Program Comments" source="ugProgramComments" />
        <TextInput
          label="Work Experience Comments"
          source="workExperienceComments"
        />
        <NumberInput
          step={1}
          label="Work Experience Rating"
          source="workExperienceRating"
        />
      </SimpleForm>
    </Edit>
  );
};
