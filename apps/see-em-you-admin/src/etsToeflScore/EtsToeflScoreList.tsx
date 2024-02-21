import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EtsToeflScoreList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EtsToeflScores"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Inst Code" source="instCode" />
        <TextField label="Dept Code" source="deptCode" />
        <TextField label="Reg Number" source="regNumber" />
        <TextField label="L Name" source="lName" />
        <TextField label="F Name" source="fName" />
        <TextField label="M Name" source="mName" />
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="Address3" source="address3" />
        <TextField label="Address4" source="address4" />
        <TextField label="Address City" source="addressCity" />
        <TextField label="Address State" source="addressState" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="Country Name" source="countryName" />
        <TextField label="Address Zip" source="addressZip" />
        <TextField label="Native Country Code" source="nativeCountryCode" />
        <TextField label="Test Center Code Rpdt" source="testCenterCodeRPDT" />
        <TextField label="Native Country Name" source="nativeCountryName" />
        <TextField label="Native Language Code" source="nativeLanguageCode" />
        <TextField label="Native Language Name" source="nativeLanguageName" />
        <TextField label="Dob" source="dob" />
        <TextField label="Gender" source="gender" />
        <TextField label="Test Date" source="testDate" />
        <TextField label="Test Type" source="testType" />
        <TextField label="Listening Indicator" source="listeningIndicator" />
        <TextField label="Speaking Indicator" source="speakingIndicator" />
        <TextField label="Email" source="email" />
        <TextField label="Report Date" source="reportDate" />
        <TextField label="Listening" source="listening" />
        <TextField label="Reading" source="reading" />
        <TextField label="Speaking" source="speaking" />
        <TextField label="Writing" source="writing" />
        <TextField label="Total" source="total" />
        <TextField label="Test Center Code" source="testCenterCode" />
        <TextField label="Test Country Location" source="testCountryLocation" />
        <TextField label="Identification Type" source="identificationType" />
        <TextField label="Id Number" source="idNumber" />
        <TextField label="Issuing Country" source="issuingCountry" />
        <TextField label="Listeningmb" source="listeningmb" />
        <TextField label="Listeningmb Date" source="listeningmbDate" />
        <TextField label="Readingmb" source="readingmb" />
        <TextField label="Readingmb Date" source="readingmbDate" />
        <TextField label="Speakingmb" source="speakingmb" />
        <TextField label="Speakingmb Date" source="speakingmbDate" />
        <TextField label="Writingmb" source="writingmb" />
        <TextField label="Writingmb Date" source="writingmbDate" />
        <TextField label="Totalmb" source="totalmb" />
        <TextField label="Totalmb Date" source="totalmbDate" />
        <TextField label="R Pdt Listening" source="rPDTListening" />
        <TextField label="R Pdt Reading" source="rPDTReading" />
        <TextField label="R Pdt Writing" source="rPDTWriting" />
        <TextField label="Essentials Listening" source="essentialsListening" />
        <TextField label="Essentials Reading" source="essentialsReading" />
        <TextField label="Essentials Writing" source="essentialsWriting" />
        <TextField label="Essentials Speaking" source="essentialsSpeaking" />
        <TextField
          label="Essentials Total Band Score"
          source="essentialsTotalBandScore"
        />
        <TextField
          label="Essentials Total Band Scoremb"
          source="essentialsTotalBandScoremb"
        />
        <TextField
          label="Essentials Total Band Scoremb Date"
          source="essentialsTotalBandScorembDate"
        />
        <TextField
          label="Essentials Listeningmb"
          source="essentialsListeningmb"
        />
        <TextField
          label="Essentials Listeningmb Date"
          source="essentialsListeningmbDate"
        />
        <TextField label="Essentials Readingmb" source="essentialsReadingmb" />
        <TextField
          label="Essentials Readingmb Date"
          source="essentialsReadingmbDate"
        />
        <TextField label="Essentials Writingmb" source="essentialsWritingmb" />
        <TextField
          label="Essentials Writingmb Date"
          source="essentialsWritingmbDate"
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
          label="Essentials Listening Cefr"
          source="essentialsListeningCEFR"
        />
        <TextField
          label="Essentials Reading Cefr"
          source="essentialsReadingCEFR"
        />
        <TextField
          label="Essentials Writing Cefr"
          source="essentialsWritingCEFR"
        />
        <TextField
          label="Essentials Speaking Cefr"
          source="essentialsSpeakingCEFR"
        />
        <TextField
          label="Essentials Total Band Score Cefr"
          source="essentialsTotalBandScoreCEFR"
        />
        <DateField source="createdDate" label="Created Date" />
        <TextField label="Id" source="id" />
      </Datagrid>
    </List>
  );
};
