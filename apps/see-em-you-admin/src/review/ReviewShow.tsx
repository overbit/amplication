import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  BooleanField,
  DateField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ReviewShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Admit Vote" source="admitVote" />
        <TextField label="Advise Time" source="adviseTime" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Background" source="background" />
        <TextField label="Brilliance" source="brilliance" />
        <TextField label="Comments" source="comments" />
        <TextField label="Commit Money" source="commitMoney" />
        <TextField label="Committee Vote" source="committeeVote" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Fac Vote" source="facVote" />
        <TextField label="Fund Source" source="fundSource" />
        <TextField label="Grades" source="grades" />
        <TextField label="Grad Name" source="gradName" />
        <TextField label="Id" source="id" />
        <TextField label="Impressed" source="impressed" />
        <TextField label="Interview" source="interview" />
        <TextField label="Mse Experience Len" source="mseExperienceLen" />
        <TextField label="Other Interest" source="otherInterest" />
        <TextField label="Pertinent Info" source="pertinentInfo" />
        <TextField label="Point" source="point" />
        <TextField label="Point2" source="point2" />
        <TextField label="Point2 Certainty" source="point2Certainty" />
        <TextField label="Point Certainty" source="pointCertainty" />
        <TextField label="Private Comments" source="privateComments" />
        <TextField label="Publications" source="publications" />
        <TextField label="Recommendations" source="recommendations" />
        <BooleanField label="Recruited" source="recruited" />
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Round" source="round" />
        <TextField label="Round2" source="round2" />
        <TextField label="Round3" source="round3" />
        <TextField label="Rrank" source="rrank" />
        <TextField label="Statement" source="statement" />
        <TextField label="Supplemental Review" source="supplementalReview" />
        <TextField label="Touched" source="touched" />
        <DateField source="updated" label="Updated" />
      </SimpleShowLayout>
    </Show>
  );
};
