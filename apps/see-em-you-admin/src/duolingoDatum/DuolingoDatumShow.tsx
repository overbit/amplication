import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const DuolingoDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Last Name" source="lastName" />
        <TextField label="Given Names" source="givenNames" />
        <TextField label="Coupon Id" source="couponId" />
        <TextField label="Session Id" source="sessionId" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="First Name" source="firstName" />
        <TextField label="User Id" source="userId" />
        <TextField label="Certificate Url" source="certificateUrl" />
        <TextField label="Middle Names" source="middleNames" />
        <TextField label="Applicant Id" source="applicantId" />
        <TextField label="Surnames" source="surnames" />
        <TextField label="Email" source="email" />
        <TextField label="Embed Url" source="embedUrl" />
        <TextField label="Interview Url" source="interviewUrl" />
        <TextField label="Language" source="language" />
        <TextField label="Country" source="country" />
        <TextField label="Birthdate" source="birthdate" />
        <TextField label="Test Date" source="testDate" />
        <TextField label="Verification Date" source="verificationDate" />
        <TextField label="Overall Score" source="overallScore" />
        <TextField label="Scale" source="scale" />
        <TextField
          label="Conversation Subscore"
          source="conversationSubscore"
        />
        <TextField label="Production Subscore" source="productionSubscore" />
        <TextField label="Literacy Subscore" source="literacySubscore" />
        <TextField label="Certified" source="certified" />
        <TextField
          label="Comprehension Subscore"
          source="comprehensionSubscore"
        />
        <TextField label="Percent Score" source="percentScore" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="School" source="school" />
        <TextField label="Domain" source="domain" />
        <DateField source="insertDate" label="Insert Date" />
        <TextField label="Id" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
