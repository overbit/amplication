import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { APPLICATION_TITLE_FIELD } from "../application/ApplicationTitle";

export const ReviewList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Reviews"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Reviewer Id" source="reviewerId" />
        <TextField label="Background" source="background" />
        <TextField label="Grades" source="grades" />
        <TextField label="Statement" source="statement" />
        <TextField label="Comments" source="comments" />
        <TextField label="Point" source="point" />
        <TextField label="Point Certainty" source="pointCertainty" />
        <TextField label="Point2" source="point2" />
        <TextField label="Point2 Certainty" source="point2Certainty" />
        <TextField label="Private Comments" source="privateComments" />
        <TextField label="Round2" source="round2" />
        <TextField label="Round3" source="round3" />
        <TextField label="Touched" source="touched" />
        <TextField label="Admit Vote" source="admitVote" />
        <BooleanField label="Recruited" source="recruited" />
        <TextField label="Grad Name" source="gradName" />
        <TextField label="Pertinent Info" source="pertinentInfo" />
        <TextField label="Advise Time" source="adviseTime" />
        <TextField label="Commit Money" source="commitMoney" />
        <TextField label="Fund Source" source="fundSource" />
        <TextField label="Round" source="round" />
        <TextField label="Interview" source="interview" />
        <TextField label="Recommendations" source="recommendations" />
        <TextField label="Publications" source="publications" />
        <TextField label="Brilliance" source="brilliance" />
        <TextField label="Other Interest" source="otherInterest" />
        <TextField label="Supplemental Review" source="supplementalReview" />
        <TextField label="Fac Vote" source="facVote" />
        <TextField label="Committee Vote" source="committeeVote" />
        <TextField label="Rrank" source="rrank" />
        <TextField label="Department Id" source="departmentId" />
        <TextField label="Mse Experience Len" source="mseExperienceLen" />
        <TextField label="Impressed" source="impressed" />
        <DateField source="updated" label="Updated" />
        <ReferenceField
          label="Application"
          source="application.id"
          reference="Application"
        >
          <TextField source={APPLICATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
