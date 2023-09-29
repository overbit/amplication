import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SlateAppCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Application Status" source="applicationStatus" />
        <TextInput label="App Submitted Date" source="appSubmittedDate" />
        <TextInput label="Birthdate" source="birthdate" />
        <TextInput label="Citizenship Status" source="citizenshipStatus" />
        <TextInput
          label="Decision Confirmed Export Code"
          source="decisionConfirmedExportCode"
        />
        <TextInput label="Email" source="email" />
        <TextInput label="Email Address" source="emailAddress" />
        <TextInput label="First" source="first" />
        <TextInput label="Hispanic" source="hispanic" />
        <TextInput label="Ipeds Classification" source="ipedsClassification" />
        <TextInput label="Language" source="language" />
        <TextInput label="Last" source="last" />
        <TextInput label="Mailing Address City" source="mailingAddressCity" />
        <TextInput
          label="Mailing Address Country Fips Code"
          source="mailingAddressCountryFipsCode"
        />
        <TextInput
          label="Mailing Address Country Iso2 Code"
          source="mailingAddressCountryIso2Code"
        />
        <TextInput
          label="Mailing Address Country Iso3 Code"
          source="mailingAddressCountryIso3Code"
        />
        <TextInput
          label="Mailing Address Country Name"
          source="mailingAddressCountryName"
        />
        <TextInput
          label="Mailing Address Country Sis Export"
          source="mailingAddressCountrySisExport"
        />
        <TextInput
          label="Mailing Address Geomarket"
          source="mailingAddressGeomarket"
        />
        <TextInput
          label="Mailing Address Postal Code"
          source="mailingAddressPostalCode"
        />
        <TextInput
          label="Mailing Address Region"
          source="mailingAddressRegion"
        />
        <TextInput
          label="Mailing Address Street1"
          source="mailingAddressStreet1"
        />
        <TextInput
          label="Mailing Address Street2"
          source="mailingAddressStreet2"
        />
        <TextInput
          label="Mailing Address Street3"
          source="mailingAddressStreet3"
        />
        <TextInput
          label="Mailing Address Valid From Date"
          source="mailingAddressValidFromDate"
        />
        <TextInput
          label="Mailing Address Valid To Date"
          source="mailingAddressValidToDate"
        />
        <TextInput label="Middle" source="middle" />
        <TextInput label="Mobile Phone Number" source="mobilePhoneNumber" />
        <TextInput
          label="Permanent Address City"
          source="permanentAddressCity"
        />
        <TextInput
          label="Permanent Address Country"
          source="permanentAddressCountry"
        />
        <TextInput
          label="Permanent Address Country Fips Code"
          source="permanentAddressCountryFipsCode"
        />
        <TextInput
          label="Permanent Address Country Iso2 Code"
          source="permanentAddressCountryIso2Code"
        />
        <TextInput
          label="Permanent Address Country Iso3 Code"
          source="permanentAddressCountryIso3Code"
        />
        <TextInput
          label="Permanent Address Country Sis Export"
          source="permanentAddressCountrySisExport"
        />
        <TextInput
          label="Permanent Address Geomarket"
          source="permanentAddressGeomarket"
        />
        <TextInput
          label="Permanent Address Postal Code"
          source="permanentAddressPostalCode"
        />
        <TextInput
          label="Permanent Address Region"
          source="permanentAddressRegion"
        />
        <TextInput
          label="Permanent Address Street1"
          source="permanentAddressStreet1"
        />
        <TextInput
          label="Permanent Address Street2"
          source="permanentAddressStreet2"
        />
        <TextInput
          label="Permanent Address Street3"
          source="permanentAddressStreet3"
        />
        <TextInput label="Personal Web Site" source="personalWebSite" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <TextInput label="Prefix" source="prefix" />
        <TextInput label="Primary Citizenship" source="primaryCitizenship" />
        <TextInput label="Race" source="race" />
        <TextInput label="Reference1 Waiver" source="reference1Waiver" />
        <TextInput label="Reference2 Waiver" source="reference2Waiver" />
        <TextInput label="Reference3 Waiver" source="reference3Waiver" />
        <TextInput label="Round Export Code" source="roundExportCode" />
        <TextInput
          label="Secondary Citizenship"
          source="secondaryCitizenship"
        />
        <TextInput label="Sex" source="sex" />
        <TextInput label="Suffix" source="suffix" />
      </SimpleForm>
    </Create>
  );
};
