export const environment = {
  "app_name": "MentorED",
  "baseUrl": "",
  "chatBaseUrl": "",
  "chatWebSocketUrl": "",
  "deepLinkUrl": "",
  "isAuthBypassed": true,
  "password": {
    "errorMessage": "Password should contain at least one uppercase letter, one number and one special character.",
    "minLength": 10,
    "regexPattern": "^(?=(?:.*[A-Z]){2})(?=(?:.*[0-9]){2})(?=(?:.*[!@#%$&()\\-`.+,]){3}).{11,}$"
  },
  "privacyPolicyUrl": "",
  "production": "true",
  "recaptchaSiteKey": "",
  "recaptchaSiteKeyOld": "",
  "restictedPages": [
    "HELP_VIDEOS_PAGE",
    "HELP_PAGE",
    "FAQ_PAGE",
    "LOGIN_ACTIVITY_PAGE",
    "CHANGE_PASSWORD_PAGE",
    "LOGIN_PAGE",
    "REGISTER_PAGE",
    "RESET_PASSWORD_PAGE",
    "OTP_PAGE"
  ],
  "supportEmail": "",
  "termsOfServiceUrl": "",
  "unauthorizedRedirectUrl": ""
};