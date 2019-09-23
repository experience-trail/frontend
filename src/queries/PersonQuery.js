// ### Create Person:
// mutation createPerson {
//   create_person(person_data: {google_id: "115306037822201585694", email: "alice@gmail.com", verified_email: true, name: "Alice T", given_name: "Alice", family_name: "Taylor", picture: "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg", locale: "en"}) {
//     person {
//       google_id
//       email
//       verified_email
//       name
//       given_name
//       family_name
//       picture
//       locale
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "create_person": {
//       "person": {
//         "google_id": "115306037822201585694",
//         "email": "alice@gmail.com",
//         "verified_email": true,
//         "name": "Alice T",
//         "given_name": "Alice",
//         "family_name": "Taylor",
//         "picture": "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg",
//         "locale": "en"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Query Person:
// query queryPerson {
//   person(google_id: "115306037822201585694") {
//     google_id
//     email
//     verified_email
//     name
//     given_name
//     family_name
//     picture
//     locale
//   }
// }

// **Response:**
// {
//   "data": {
//     "person": {
//       "google_id": "115306037822201585694",
//       "email": "alice@gmail.com",
//       "verified_email": true,
//       "name": "Alice T",
//       "given_name": "Alice",
//       "family_name": "Taylor",
//       "picture": "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg",
//       "locale": "en"
//     }
//   }
// }

// ### Delete Person:
// mutation deletePerson {
//   delete_person(person_data: {google_id: "115306037822201585694"}) {
//     person {
//       google_id
//       email
//       verified_email
//       name
//       given_name
//       family_name
//       picture
//       locale
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_person": {
//       "person": {
//         "google_id": "115306037822201585694",
//         "email": "alice@gmail.com",
//         "verified_email": true,
//         "name": "Alice T",
//         "given_name": "Alice",
//         "family_name": "Taylor",
//         "picture": "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg",
//         "locale": "en"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delete Person By Force:
// **Important Note:** This will delete all the associated information too.
// mutation deletePersonByForce {
//   delete_person_by_force(person_data: {google_id: "115306037822201585694"}) {
//     person {
//       google_id
//       email
//       verified_email
//       name
//       given_name
//       family_name
//       picture
//       locale
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_person_by_force": {
//       "person": {
//         "google_id": "115306037822201585694",
//         "email": "alice@gmail.com",
//         "verified_email": true,
//         "name": "Alice T",
//         "given_name": "Alice",
//         "family_name": "Taylor",
//         "picture": "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg",
//         "locale": "en"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }