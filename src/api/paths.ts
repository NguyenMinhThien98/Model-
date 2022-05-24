export const baseUrl = 'https://maqro.nustechnology.com';

export const apiUrl = {
  signIn: `${baseUrl}/sign-in`,
  signUp: `${baseUrl}/sign-up`,
  verifyEmail: `${baseUrl}/verify/email`,
  forgotPassword: `${baseUrl}/forgot-password`,
  resetPassword: `${baseUrl}/reset-password`,
  industries: `${baseUrl}/industries`,
  companies: `${baseUrl}/companies`,
  watchlist: `${baseUrl}/watch-lists`,
  resendOtp: `${baseUrl}/resend-otp`,

  //Research
  search: params =>
    `${baseUrl}/search?key=${params.key}&page=${params.page}&limit=${params.limit}&filter=${params.filters}`,
  getRecentSearch: params =>
    `${baseUrl}/search/recent?page=${params.page}&limit=${params.limit}`,
  deleteRecentSearch: id => `${baseUrl}/keyword/${id}`,
  getTopSearch: params =>
    `${baseUrl}/search/top?page=${params.page}&limit=${params.limit}`,
  personalAccount: `${baseUrl}/accounts/personal`,
  companyAccount: `${baseUrl}/accounts/personal`,
  getAccountInfo: `${baseUrl}/me`,
  verifyUpdateEmail: `${baseUrl}/verify/update-email`,
  updateEmail: `${baseUrl}/user/email`,
  verifyUpdatePhone: `${baseUrl}/verify/phone`,
  updatePhone: `${baseUrl}/user/phone`,
  updateResidentialAddress: `${baseUrl}/accounts/address`,
};
