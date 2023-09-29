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
        <TextField label="Applicant Id" source="applicantId" />
        <TextField label="Application Id" source="applicationId" />
        <TextField label="Birthdate" source="birthdate" />
        <TextField label="Certificate Url" source="certificateUrl" />
        <TextField label="Certified" source="certified" />
        <TextField
          label="Comprehension Subscore"
          source="comprehensionSubscore"
        />
        <TextField
          label="Conversation Subscore"
          source="conversationSubscore"
        />
        <TextField label="Country" source="country" />
        <TextField label="Coupon Id" source="couponId" />
        <TextField label="Domain" source="domain" />
        <TextField label="Email" source="email" />
        <TextField label="Embed Url" source="embedUrl" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Full Name" source="fullName" />
        <TextField label="Given Names" source="givenNames" />
        <TextField label="Id" source="id" />
        <DateField source="insertDate" label="Insert Date" />
        <TextField label="Interview Url" source="interviewUrl" />
        <TextField label="Language" source="language" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Literacy Subscore" source="literacySubscore" />
        <TextField label="Middle Names" source="middleNames" />
        <TextField label="Overall Score" source="overallScore" />
        <TextField label="Percent Score" source="percentScore" />
        <TextField label="Production Subscore" source="productionSubscore" />
        <TextField label="Scale" source="scale" />
        <TextField label="School" source="school" />
        <TextField label="Session Id" source="sessionId" />
        <TextField label="Surnames" source="surnames" />
        <TextField label="Test Date" source="testDate" />
        <TextField label="User Id" source="userId" />
        <TextField label="Verification Date" source="verificationDate" />
      </SimpleShowLayout>
    </Show>
  );
};
