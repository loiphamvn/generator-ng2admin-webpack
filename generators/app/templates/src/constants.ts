export const CONSTANTS = {
  GOOGLE_API_KEY: '',
  GOOGLE_CLIENT_ID: '732070508147-tjjj89j114819aste3c54qjo946g4mob.apps.googleusercontent.com',
  GOOGLE_REDIRECT_URI: 'http://localhost/bss-insight/oauth2callback.html',

  FACEBOOK_APP_ID: '1015542651820710',
  FACEBOOK_APP_VERSION: 'v2.5',
  FACEBOOK_SCOPE: ['email', 'user_likes', 'user_photos', 'user_birthday', 'public_profile'],
  FACEBOOK_AUTHORIZATION_END_POINT: 'https://www.facebook.com/v2.5/dialog/oauth',
  FACEBOOK_REDIRECT_URI: 'http://localhost/bss-insight/oauthcallback.html',

  API: {
    checkAuth: 'auth',
    login: 'auth/signin',
    facebookLogin: 'http://localhost/bss-insight-api/public/auth/facebook',
    googleLogin: 'http://localhost/bss-insight-api/public/auth/google',
    logout: 'http://localhost/bss-insight-api/public/auth/logout',

  },

  SECURITY: {
    tokenName: 'USER-TOKEN'
  },

  PATTERN: {
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
    ssn: /^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/,
    date: /[0-9]{2}/,
    month: /[0-9]{2}/,
    year: /[0-9]{4}/,
    age: /^[1-9]+[0-9]*$/,
  },
};
