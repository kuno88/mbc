// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // firebase: {
  //   projectId: 'mc-bootstrap',
  //   appId: '1:628583050324:web:d48cf461a978425d6ad1c1',
  //   storageBucket: 'mc-bootstrap.appspot.com',
  //   locationId: 'us-central',
  //   apiKey: 'AIzaSyCSVcLePiDnSOAxKC04z0wlmAt-eN2FG3Q',
  //   authDomain: 'mc-bootstrap.firebaseapp.com',
  //   messagingSenderId: '628583050324',
  //   measurementId: 'G-2L20PEDZ7X',
  // },
  production: false,
   firebaseConfig : {
     apiKey: "AIzaSyCSVcLePiDnSOAxKC04z0wlmAt-eN2FG3Q",
     authDomain: "mc-bootstrap.firebaseapp.com",
     projectId: "mc-bootstrap",
     storageBucket: "mc-bootstrap.appspot.com",
     messagingSenderId: "628583050324",
     appId: "1:628583050324:web:d48cf461a978425d6ad1c1",
     measurementId: "G-2L20PEDZ7X"
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
