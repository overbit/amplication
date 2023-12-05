import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DuolingoDataCopyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Applicant Id" source="applicantId" />
        <NumberInput step={1} label="Application Id" source="applicationId" />
        <DateTimeInput label="Birthdate" source="birthdate" />
        <TextInput label="Certificate Url" source="certificateUrl" />
        <NumberInput step={1} label="Certified" source="certified" />
        <NumberInput
          step={1}
          label="Comprehension Subscore"
          source="comprehensionSubscore"
        />
        <NumberInput
          step={1}
          label="Conversation Subscore"
          source="conversationSubscore"
        />
        <TextInput label="Country" source="country" />
        <TextInput label="Coupon Id" source="couponId" />
        <TextInput label="Domain" source="domain" />
        <TextInput label="Email" source="email" />
        <TextInput label="Embed Url" source="embedUrl" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Full Name" source="fullName" />
        <TextInput label="Given Names" source="givenNames" />
        <TextInput label="Interview Url" source="interviewUrl" />
        <TextInput label="Language" source="language" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput
          step={1}
          label="Literacy Subscore"
          source="literacySubscore"
        />
        <TextInput label="Middle Names" source="middleNames" />
        <NumberInput step={1} label="Overall Score" source="overallScore" />
        <NumberInput step={1} label="Percent Score" source="percentScore" />
        <NumberInput
          step={1}
          label="Production Subscore"
          source="productionSubscore"
        />
        <NumberInput step={1} label="Scale" source="scale" />
        <TextInput label="School" source="school" />
        <TextInput label="Session Id" source="sessionId" />
        <TextInput label="Surnames" source="surnames" />
        <DateTimeInput label="Test Date" source="testDate" />
        <TextInput label="User Id" source="userId" />
        <DateTimeInput label="Verification Date" source="verificationDate" />
      </SimpleForm>
    </Edit>
  );
};
