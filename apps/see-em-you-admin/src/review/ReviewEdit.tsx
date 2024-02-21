import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <TextInput label="Background" source="background" />
        <TextInput label="Grades" source="grades" />
        <TextInput label="Statement" source="statement" />
        <TextInput label="Comments" source="comments" />
        <NumberInput label="Point" source="point" />
        <NumberInput label="Point Certainty" source="pointCertainty" />
        <NumberInput label="Point2" source="point2" />
        <NumberInput label="Point2 Certainty" source="point2Certainty" />
        <TextInput label="Private Comments" source="privateComments" />
        <NumberInput step={1} label="Round2" source="round2" />
        <NumberInput step={1} label="Round3" source="round3" />
        <TextInput label="Touched" source="touched" />
        <TextInput label="Admit Vote" source="admitVote" />
        <BooleanInput label="Recruited" source="recruited" />
        <TextInput label="Grad Name" source="gradName" />
        <TextInput label="Pertinent Info" source="pertinentInfo" />
        <TextInput label="Advise Time" source="adviseTime" />
        <TextInput label="Commit Money" source="commitMoney" />
        <TextInput label="Fund Source" source="fundSource" />
        <NumberInput step={1} label="Round" source="round" />
        <TextInput label="Interview" source="interview" />
        <TextInput label="Recommendations" source="recommendations" />
        <TextInput label="Publications" source="publications" />
        <TextInput label="Brilliance" source="brilliance" />
        <TextInput label="Other Interest" source="otherInterest" />
        <NumberInput
          step={1}
          label="Supplemental Review"
          source="supplementalReview"
        />
        <TextInput label="Fac Vote" source="facVote" />
        <TextInput label="Committee Vote" source="committeeVote" />
        <TextInput label="Rrank" source="rrank" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Mse Experience Len" source="mseExperienceLen" />
        <TextInput label="Impressed" source="impressed" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
