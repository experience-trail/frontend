import { gql } from 'apollo-boost'

const getPlaceQuery = gql`
    query queryPlace($place_id: String) {
        place(place_id: $place_id) {
            place_id
            timestamp
        }
    }
`

export {
    getPlaceQuery
}
// ### Create Place:
// mutation createPlace {
//   create_place(place_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4", google_place_details: "{\"place_id\":\"ChIJN1t_tDeuEmsRUsoyG83frY4\",\"rating\" : 4.6, \"name\" : \"Google\"}", timestamp: "2019-06-02T13:44:31+05:30"}) {
//     place {
//       place_id
//       timestamp
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "create_place": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
//         "timestamp": "2019-06-02T13:44:31+05:30"
//       },
//       "ok": true
//     }
//   }
// }

// ### Query Place:
// query queryPlace {
//   place(place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4") {
//     place_id
//     timestamp
//   }
// }

// **Response:**
// {
//   "data": {
//     "place": {
//       "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
//       "timestamp": "2019-06-02T13:44:31+05:30"
//     }
//   }
// }

// ### Query Place Details:
// query queryPlaceDetails {
//   place_details(place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4") {
//     place_id
//     google_place_details
//   }
// }


// **Response:**
// {
//   "data": {
//     "place_details": {
//       "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
//       "google_place_details": "{\"place_id\": \"ChIJN1t_tDeuEmsRUsoyG83frY4\", \"rating\": 4.5, \"name\": \"Google\"}"
//     }
//   }
// }

// ### Delete Place:
// mutation deletePlace {
//   delete_place(place_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4"}) {
//     place {
//       place_id
//       timestamp
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_place": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
//         "timestamp": "2019-06-02T13:44:31+05:30"
//       },
//       "ok": true
//     }
//   }
// }

// ### Delete Place by Force Example:
// mutation deletePlace {
//   delete_place(place_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4"}) {
//     place {
//       place_id
//       timestamp
//     }
//     ok
//     message
//   }
// }

// **Failure Response:**
// Note that if there are associated information, normal deletion shall fail.
// So need to use DeleteByForce.
// {
//   "data": {
//     "delete_place": {
//       "place": null,
//       "ok": false,
//       "message": "place has other associated information"
//     }
//   }
// }

// **Important Note:** This will delete all the associated information too.

// mutation deletePlaceByForce {
//   delete_place_by_force(place_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4"}) {
//     place {
//       place_id
//       timestamp
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_place_by_force": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4",
//         "timestamp": "2019-06-02T13:44:31+05:30"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }