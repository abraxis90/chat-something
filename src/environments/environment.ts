// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAyCGHUl3dh_G_sDnHhZSArhucDvUylHHM',
    authDomain: 'meetup-f86a5.firebaseapp.com',
    databaseURL: 'https://meetup-f86a5.firebaseio.com',
    projectId: 'meetup-f86a5',
    storageBucket: 'meetup-f86a5.appspot.com',
    messagingSenderId: '369862374785'
  }
};
