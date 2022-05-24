import {createSlice} from '@reduxjs/toolkit';
import {DropDownItem} from 'components/Dropdown';
import {Error} from 'models/Error';

export interface AccountProps {
  alternateName: string;
  country: DropDownItem;
  countryOfBirth: DropDownItem;
  dateOfBirth: Date;
  email: string;
  expiryDate: Date;
  firstName: string;
  identificationType: DropDownItem;
  isHaveMoveAddress: boolean;
  isHaveTin: boolean;
  isLinkedCash: boolean;
  isSameResidentialAddress: boolean;
  isTaxExemption: boolean;
  isTaxResident: boolean;
  lastName: string;
  licenseNumber: string;
  mailingPostcode: string;
  mailingState: DropDownItem;
  mailingStreetNameOne: string;
  mailingStreetNumber: string;
  mailingSuburb: string;
  mailingUnitNumber: string;
  middleName: string;
  mobilePhone: string;
  occupationType: DropDownItem;
  passportNumber: string;
  postcode: string;
  sourceOfFunds: DropDownItem;
  state: DropDownItem;
  stateOfIssue: DropDownItem;
  streetNameOne: string;
  streetNumber: string;
  suburb: string;
  tfn: string;
  tfnExemptionCode: DropDownItem;
  tin: string;
  tinExemptionCode: DropDownItem;
  title: DropDownItem;
  townOfBirth: string;
  unitNumber: string;
  registeredOfficeUnitNumber: string;
  registeredOfficeStreetNumber: string;
  registeredOfficeStreetNameOne: string;
  registeredOfficeSuburb: string;
  registeredOfficePostcode: string;
  registeredOfficeState: DropDownItem;
  businessUnitNumber: string;
  businessStreetNumber: string;
  businessStreetNameOne: string;
  businessSuburb: string;
  businessPostcode: string;
  businessState: DropDownItem;
  companyMailingUnitNumber: string;
  companyMailingStreetNumber: string;
  companyMailingStreetNameOne: string;
  companyMailingSuburb: string;
  companyMailingPostcode: string;
  companyMailingState: DropDownItem;
  isSameOfficeAddress: boolean;
  companyRole: DropDownItem;
  companyName: string;
  companyType: DropDownItem;
  companySectors: DropDownItem;
  acnNumber: string;
  abnNumber: string;
  dateOfIncorporation: Date;
  tfnNumber: string;
  isTaxExemptionForCompany: boolean;
  useExistAddress: boolean;
  addressSelected: DropDownItem;
}

const initialState = {
  loading: <boolean>false,
  error: <Error | null>null,
  accountType: <string | null>null,
  accountData: <AccountProps>{},
  doneScreen: <string | null>null,
  createAccountSuccess: <boolean>false,
};

const tradingAccountSlice = createSlice({
  name: 'tradingAccount',
  initialState,
  reducers: {
    updateAccountType(state, action) {
      state.accountType = action.payload.data;
      state.doneScreen = action.payload.screen;
    },
    updateAccountData(state, action) {
      state.accountData = action.payload.data;
      state.doneScreen = action.payload.screen;
    },
    resetDoneScreen(state) {
      state.doneScreen = null;
    },
    requestActionStart(state) {
      state.loading = true;
      state.error = null;
    },
    requestActionFailed(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    requestCreateAccountSuccess(state) {
      state.loading = false;
      state.createAccountSuccess = true;
    },
    resetAccountData() {
      return initialState;
    },
  },
});

export const {
  updateAccountType,
  updateAccountData,
  resetDoneScreen,
  requestActionStart,
  requestActionFailed,
  requestCreateAccountSuccess,
  resetAccountData,
} = tradingAccountSlice.actions;

export default tradingAccountSlice.reducer;
