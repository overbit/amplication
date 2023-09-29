import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { ApplicationTitle } from "../application/ApplicationTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Admit Vote" source="admitVote" />
        <TextInput label="Advise Time" source="adviseTime" />
        <ReferenceInput
          source="application.id"
          reference="Application"
          label="Application"
        >
          <SelectInput optionText={ApplicationTitle} />
        </ReferenceInput>
        <TextInput label="Background" source="background" />
        <TextInput label="Brilliance" source="brilliance" />
        <TextInput label="Comments" source="comments" />
        <TextInput label="Commit Money" source="commitMoney" />
        <TextInput label="Committee Vote" source="committeeVote" />
        <NumberInput step={1} label="Department Id" source="departmentId" />
        <TextInput label="Fac Vote" source="facVote" />
        <TextInput label="Fund Source" source="fundSource" />
        <TextInput label="Grades" source="grades" />
        <TextInput label="Grad Name" source="gradName" />
        <TextInput label="Impressed" source="impressed" />
        <TextInput label="Interview" source="interview" />
        <TextInput label="Mse Experience Len" source="mseExperienceLen" />
        <TextInput label="Other Interest" source="otherInterest" />
        <TextInput label="Pertinent Info" source="pertinentInfo" />
        <NumberInput label="Point" source="point" />
        <NumberInput label="Point2" source="point2" />
        <NumberInput label="Point2 Certainty" source="point2Certainty" />
        <NumberInput label="Point Certainty" source="pointCertainty" />
        <TextInput label="Private Comments" source="privateComments" />
        <TextInput label="Publications" source="publications" />
        <TextInput label="Recommendations" source="recommendations" />
        <BooleanInput label="Recruited" source="recruited" />
        <NumberInput step={1} label="Reviewer Id" source="reviewerId" />
        <NumberInput step={1} label="Round" source="round" />
        <NumberInput step={1} label="Round2" source="round2" />
        <NumberInput step={1} label="Round3" source="round3" />
        <TextInput label="Rrank" source="rrank" />
        <TextInput label="Statement" source="statement" />
        <NumberInput
          step={1}
          label="Supplemental Review"
          source="supplementalReview"
        />
        <TextInput label="Touched" source="touched" />
      </SimpleForm>
    </Edit>
  );
};
