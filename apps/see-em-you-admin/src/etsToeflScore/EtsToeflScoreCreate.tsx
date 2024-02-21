import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const EtsToeflScoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Inst Code" source="instCode" />
        <TextInput label="Dept Code" source="deptCode" />
        <TextInput label="Reg Number" source="regNumber" />
        <TextInput label="L Name" source="lName" />
        <TextInput label="F Name" source="fName" />
        <TextInput label="M Name" source="mName" />
        <TextInput label="Address1" source="address1" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="Address3" source="address3" />
        <TextInput label="Address4" source="address4" />
        <TextInput label="Address City" source="addressCity" />
        <TextInput label="Address State" source="addressState" />
        <TextInput label="Country Code" source="countryCode" />
        <TextInput label="Country Name" source="countryName" />
        <TextInput label="Address Zip" source="addressZip" />
        <TextInput label="Native Country Code" source="nativeCountryCode" />
        <TextInput label="Test Center Code Rpdt" source="testCenterCodeRPDT" />
        <TextInput label="Native Country Name" source="nativeCountryName" />
        <TextInput label="Native Language Code" source="nativeLanguageCode" />
        <TextInput label="Native Language Name" source="nativeLanguageName" />
        <TextInput label="Dob" source="dob" />
        <TextInput label="Gender" source="gender" />
        <TextInput label="Test Date" source="testDate" />
        <TextInput label="Test Type" source="testType" />
        <TextInput label="Listening Indicator" source="listeningIndicator" />
        <TextInput label="Speaking Indicator" source="speakingIndicator" />
        <TextInput label="Email" source="email" />
        <TextInput label="Report Date" source="reportDate" />
        <TextInput label="Listening" source="listening" />
        <TextInput label="Reading" source="reading" />
        <TextInput label="Speaking" source="speaking" />
        <TextInput label="Writing" source="writing" />
        <TextInput label="Total" source="total" />
        <TextInput label="Test Center Code" source="testCenterCode" />
        <TextInput label="Test Country Location" source="testCountryLocation" />
        <TextInput label="Identification Type" source="identificationType" />
        <TextInput label="Id Number" source="idNumber" />
        <TextInput label="Issuing Country" source="issuingCountry" />
        <TextInput label="Listeningmb" source="listeningmb" />
        <TextInput label="Listeningmb Date" source="listeningmbDate" />
        <TextInput label="Readingmb" source="readingmb" />
        <TextInput label="Readingmb Date" source="readingmbDate" />
        <TextInput label="Speakingmb" source="speakingmb" />
        <TextInput label="Speakingmb Date" source="speakingmbDate" />
        <TextInput label="Writingmb" source="writingmb" />
        <TextInput label="Writingmb Date" source="writingmbDate" />
        <TextInput label="Totalmb" source="totalmb" />
        <TextInput label="Totalmb Date" source="totalmbDate" />
        <TextInput label="R Pdt Listening" source="rPDTListening" />
        <TextInput label="R Pdt Reading" source="rPDTReading" />
        <TextInput label="R Pdt Writing" source="rPDTWriting" />
        <TextInput label="Essentials Listening" source="essentialsListening" />
        <TextInput label="Essentials Reading" source="essentialsReading" />
        <TextInput label="Essentials Writing" source="essentialsWriting" />
        <TextInput label="Essentials Speaking" source="essentialsSpeaking" />
        <TextInput
          label="Essentials Total Band Score"
          source="essentialsTotalBandScore"
        />
        <TextInput
          label="Essentials Total Band Scoremb"
          source="essentialsTotalBandScoremb"
        />
        <TextInput
          label="Essentials Total Band Scoremb Date"
          source="essentialsTotalBandScorembDate"
        />
        <TextInput
          label="Essentials Listeningmb"
          source="essentialsListeningmb"
        />
        <TextInput
          label="Essentials Listeningmb Date"
          source="essentialsListeningmbDate"
        />
        <TextInput label="Essentials Readingmb" source="essentialsReadingmb" />
        <TextInput
          label="Essentials Readingmb Date"
          source="essentialsReadingmbDate"
        />
        <TextInput label="Essentials Writingmb" source="essentialsWritingmb" />
        <TextInput
          label="Essentials Writingmb Date"
          source="essentialsWritingmbDate"
        />
        <TextInput
          label="Essentials Speakingmb"
          source="essentialsSpeakingmb"
        />
        <TextInput
          label="Essentials Speakingmb Date"
          source="essentialsSpeakingmbDate"
        />
        <TextInput
          label="Essentials Listening Cefr"
          source="essentialsListeningCEFR"
        />
        <TextInput
          label="Essentials Reading Cefr"
          source="essentialsReadingCEFR"
        />
        <TextInput
          label="Essentials Writing Cefr"
          source="essentialsWritingCEFR"
        />
        <TextInput
          label="Essentials Speaking Cefr"
          source="essentialsSpeakingCEFR"
        />
        <TextInput
          label="Essentials Total Band Score Cefr"
          source="essentialsTotalBandScoreCEFR"
        />
      </SimpleForm>
    </Create>
  );
};
