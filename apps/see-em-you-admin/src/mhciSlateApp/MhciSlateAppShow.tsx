import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MhciSlateAppShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Application Status" source="applicationStatus" />
        <TextField label="App Submitted Date" source="appSubmittedDate" />
        <TextField label="Birthdate" source="birthdate" />
        <TextField label="Citizenship Status" source="citizenshipStatus" />
        <TextField
          label="Decision Confirmed Export Code"
          source="decisionConfirmedExportCode"
        />
        <TextField label="Email" source="email" />
        <TextField label="Email Address" source="emailAddress" />
        <TextField label="First" source="first" />
        <TextField label="Hispanic" source="hispanic" />
        <TextField label="Id" source="id" />
        <TextField label="Ipeds Classification" source="ipedsClassification" />
        <TextField label="Language" source="language" />
        <TextField label="Last" source="last" />
        <TextField label="Mailing Address City" source="mailingAddressCity" />
        <TextField
          label="Mailing Address Country Fips Code"
          source="mailingAddressCountryFipsCode"
        />
        <TextField
          label="Mailing Address Country Iso2 Code"
          source="mailingAddressCountryIso2Code"
        />
        <TextField
          label="Mailing Address Country Iso3 Code"
          source="mailingAddressCountryIso3Code"
        />
        <TextField
          label="Mailing Address Country Name"
          source="mailingAddressCountryName"
        />
        <TextField
          label="Mailing Address Country Sis Export"
          source="mailingAddressCountrySisExport"
        />
        <TextField
          label="Mailing Address Geomarket"
          source="mailingAddressGeomarket"
        />
        <TextField
          label="Mailing Address Postal Code"
          source="mailingAddressPostalCode"
        />
        <TextField
          label="Mailing Address Region"
          source="mailingAddressRegion"
        />
        <TextField
          label="Mailing Address Street1"
          source="mailingAddressStreet1"
        />
        <TextField
          label="Mailing Address Street2"
          source="mailingAddressStreet2"
        />
        <TextField
          label="Mailing Address Street3"
          source="mailingAddressStreet3"
        />
        <TextField
          label="Mailing Address Valid From Date"
          source="mailingAddressValidFromDate"
        />
        <TextField
          label="Mailing Address Valid To Date"
          source="mailingAddressValidToDate"
        />
        <TextField label="Middle" source="middle" />
        <TextField label="Mobile Phone Number" source="mobilePhoneNumber" />
        <TextField
          label="Permanent Address City"
          source="permanentAddressCity"
        />
        <TextField
          label="Permanent Address Country"
          source="permanentAddressCountry"
        />
        <TextField
          label="Permanent Address Country Fips Code"
          source="permanentAddressCountryFipsCode"
        />
        <TextField
          label="Permanent Address Country Iso2 Code"
          source="permanentAddressCountryIso2Code"
        />
        <TextField
          label="Permanent Address Country Iso3 Code"
          source="permanentAddressCountryIso3Code"
        />
        <TextField
          label="Permanent Address Country Sis Export"
          source="permanentAddressCountrySisExport"
        />
        <TextField
          label="Permanent Address Geomarket"
          source="permanentAddressGeomarket"
        />
        <TextField
          label="Permanent Address Postal Code"
          source="permanentAddressPostalCode"
        />
        <TextField
          label="Permanent Address Region"
          source="permanentAddressRegion"
        />
        <TextField
          label="Permanent Address Street1"
          source="permanentAddressStreet1"
        />
        <TextField
          label="Permanent Address Street2"
          source="permanentAddressStreet2"
        />
        <TextField
          label="Permanent Address Street3"
          source="permanentAddressStreet3"
        />
        <TextField label="Personal Web Site" source="personalWebSite" />
        <TextField label="Phone Number" source="phoneNumber" />
        <TextField label="Prefix" source="prefix" />
        <TextField label="Primary Citizenship" source="primaryCitizenship" />
        <TextField label="Race" source="race" />
        <TextField label="Reference1 Waiver" source="reference1Waiver" />
        <TextField label="Reference2 Waiver" source="reference2Waiver" />
        <TextField label="Reference3 Waiver" source="reference3Waiver" />
        <TextField label="Round Export Code" source="roundExportCode" />
        <TextField
          label="Secondary Citizenship"
          source="secondaryCitizenship"
        />
        <TextField label="Sex" source="sex" />
        <TextField label="Suffix" source="suffix" />
      </SimpleShowLayout>
    </Show>
  );
};
