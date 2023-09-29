import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EtsToeflScoreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="Address3" source="address3" />
        <TextField label="Address4" source="address4" />
        <TextField label="Address City" source="addressCity" />
        <TextField label="Address State" source="addressState" />
        <TextField label="Address Zip" source="addressZip" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="Country Name" source="countryName" />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Dept Code" source="deptCode" />
        <TextField label="Dob" source="dob" />
        <TextField label="Email" source="email" />
        <TextField label="Essentials Listening" source="essentialsListening" />
        <TextField
          label="Essentials Listening Cefr"
          source="essentialsListeningCEFR"
        />
        <TextField
          label="Essentials Listeningmb"
          source="essentialsListeningmb"
        />
        <TextField
          label="Essentials Listeningmb Date"
          source="essentialsListeningmbDate"
        />
        <TextField label="Essentials Reading" source="essentialsReading" />
        <TextField
          label="Essentials Reading Cefr"
          source="essentialsReadingCEFR"
        />
        <TextField label="Essentials Readingmb" source="essentialsReadingmb" />
        <TextField
          label="Essentials Readingmb Date"
          source="essentialsReadingmbDate"
        />
        <TextField label="Essentials Speaking" source="essentialsSpeaking" />
        <TextField
          label="Essentials Speaking Cefr"
          source="essentialsSpeakingCEFR"
        />
        <TextField
          label="Essentials Speakingmb"
          source="essentialsSpeakingmb"
        />
        <TextField
          label="Essentials Speakingmb Date"
          source="essentialsSpeakingmbDate"
        />
        <TextField
          label="Essentials Total Band Score"
          source="essentialsTotalBandScore"
        />
        <TextField
          label="Essentials Total Band Score Cefr"
          source="essentialsTotalBandScoreCEFR"
        />
        <TextField
          label="Essentials Total Band Scoremb"
          source="essentialsTotalBandScoremb"
        />
        <TextField
          label="Essentials Total Band Scoremb Date"
          source="essentialsTotalBandScorembDate"
        />
        <TextField label="Essentials Writing" source="essentialsWriting" />
        <TextField
          label="Essentials Writing Cefr"
          source="essentialsWritingCEFR"
        />
        <TextField label="Essentials Writingmb" source="essentialsWritingmb" />
        <TextField
          label="Essentials Writingmb Date"
          source="essentialsWritingmbDate"
        />
        <TextField label="F Name" source="fName" />
        <TextField label="Gender" source="gender" />
        <TextField label="Id" source="id" />
        <TextField label="Identification Type" source="identificationType" />
        <TextField label="Id Number" source="idNumber" />
        <TextField label="Inst Code" source="instCode" />
        <TextField label="Issuing Country" source="issuingCountry" />
        <TextField label="Listening" source="listening" />
        <TextField label="Listening Indicator" source="listeningIndicator" />
        <TextField label="Listeningmb" source="listeningmb" />
        <TextField label="Listeningmb Date" source="listeningmbDate" />
        <TextField label="L Name" source="lName" />
        <TextField label="M Name" source="mName" />
        <TextField label="Native Country Code" source="nativeCountryCode" />
        <TextField label="Native Country Name" source="nativeCountryName" />
        <TextField label="Native Language Code" source="nativeLanguageCode" />
        <TextField label="Native Language Name" source="nativeLanguageName" />
        <TextField label="Reading" source="reading" />
        <TextField label="Readingmb" source="readingmb" />
        <TextField label="Readingmb Date" source="readingmbDate" />
        <TextField label="Reg Number" source="regNumber" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="R Pdt Listening" source="rPDTListening" />
        <TextField label="R Pdt Reading" source="rPDTReading" />
        <TextField label="R Pdt Writing" source="rPDTWriting" />
        <TextField label="Speaking" source="speaking" />
        <TextField label="Speaking Indicator" source="speakingIndicator" />
        <TextField label="Speakingmb" source="speakingmb" />
        <TextField label="Speakingmb Date" source="speakingmbDate" />
        <TextField label="Test Center Code" source="testCenterCode" />
        <TextField label="Test Center Code Rpdt" source="testCenterCodeRPDT" />
        <TextField label="Test Country Location" source="testCountryLocation" />
        <TextField label="Test Date" source="testDate" />
        <TextField label="Test Type" source="testType" />
        <TextField label="Total" source="total" />
        <TextField label="Totalmb" source="totalmb" />
        <TextField label="Totalmb Date" source="totalmbDate" />
        <TextField label="Writing" source="writing" />
        <TextField label="Writingmb" source="writingmb" />
        <TextField label="Writingmb Date" source="writingmbDate" />
      </SimpleShowLayout>
    </Show>
  );
};
