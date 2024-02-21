import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const DuolingoDataCopyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Given Names" source="givenNames" />
        <TextInput label="Coupon Id" source="couponId" />
        <TextInput label="Session Id" source="sessionId" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="User Id" source="userId" />
        <TextInput label="Certificate Url" source="certificateUrl" />
        <TextInput label="Middle Names" source="middleNames" />
        <NumberInput step={1} label="Applicant Id" source="applicantId" />
        <TextInput label="Surnames" source="surnames" />
        <TextInput label="Email" source="email" />
        <TextInput label="Embed Url" source="embedUrl" />
        <TextInput label="Interview Url" source="interviewUrl" />
        <TextInput label="Language" source="language" />
        <TextInput label="Country" source="country" />
        <DateTimeInput label="Birthdate" source="birthdate" />
        <DateTimeInput label="Test Date" source="testDate" />
        <DateTimeInput label="Verification Date" source="verificationDate" />
        <NumberInput step={1} label="Overall Score" source="overallScore" />
        <NumberInput step={1} label="Scale" source="scale" />
        <NumberInput
          step={1}
          label="Conversation Subscore"
          source="conversationSubscore"
        />
        <NumberInput
          step={1}
          label="Production Subscore"
          source="productionSubscore"
        />
        <NumberInput
          step={1}
          label="Literacy Subscore"
          source="literacySubscore"
        />
        <NumberInput step={1} label="Certified" source="certified" />
        <NumberInput
          step={1}
          label="Comprehension Subscore"
          source="comprehensionSubscore"
        />
        <NumberInput step={1} label="Percent Score" source="percentScore" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <TextInput label="School" source="school" />
        <TextInput label="Domain" source="domain" />
      </SimpleForm>
    </Edit>
  );
};
