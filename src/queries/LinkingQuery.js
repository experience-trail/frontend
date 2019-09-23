// # APIs for linking objects with each other.

// ### Link Place to Visitors:
// mutation linkPlaceVisitor {
//   link_place_visitor(visitor_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4", visitor_google_id: "115306037822201585694"}) {
//     place {
//       place_id
//     }
//     visitor {
//       google_id
//       name
//       email
//     }
//     ok
//     message
//   }
// }


// **Response:**
// {
//   "data": {
//     "link_place_visitor": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4"
//       },
//       "visitor": {
//         "google_id": "115306037822201585694"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delink Place to Visitors:
// mutation delinkPlaceVisitor {
//   delink_place_visitor(visitor_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4", visitor_google_id: "115306037822201585694"}) {
//     place {
//       place_id
//     }
//     visitor {
//       google_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_place_visitor": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4"
//       },
//       "visitor": {
//         "google_id": "115306037822201585694"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Link Place Album:
// mutation linkPlaceAlbum {
//   link_place_album(place_album_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4", album_id: "album_id1"}) {
//     place {
//       place_id
//     }
//     album {
//       album_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "link_place_album": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4"
//       },
//       "album": {
//         "album_id": "album_id1"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delink Place Album:
// mutation delinkPlaceAlbum {
//   delink_place_album(place_album_data: {place_id: "ChIJN1t_tDeuEmsRUsoyG83frY4", album_id: "album_id1"}) {
//     place {
//       place_id
//     }
//     album {
//       album_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_place_album": {
//       "place": {
//         "place_id": "ChIJN1t_tDeuEmsRUsoyG83frY4"
//       },
//       "album": {
//         "album_id": "album_id1"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Link Friends:
// mutation linkFriends {
//   link_friends(friends_data: {friend1_google_id: "115306037822201585694", friend2_google_id: "115306037822221585694"}) {
//     friend1 {
//       google_id
//     }
//     friend2 {
//       google_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "link_friends": {
//       "friend1": {
//         "google_id": "115306037822201585694"
//       },
//       "friend2": {
//         "google_id": "115306037822221585694"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delink Friends:
// mutation delinkFriends {
//   delink_friends(friends_data: {friend1_google_id: "115306037822201585694", friend2_google_id: "115306037822221585694"}) {
//     friend1 {
//       google_id
//     }
//     friend2 {
//       google_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_friends": {
//       "friend1": {
//         "google_id": "115306037822201585694"
//       },
//       "friend2": {
//         "google_id": "115306037822221585694"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Link Following:
// mutation linkFollowing {
//   link_following(following_data: {person_google_id: "115306037822201585694", follower_google_id: "115306037822221333694"}) {
//     person {
//       google_id
//     }
//     follower {
//       google_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "link_following": {
//       "person": {
//         "google_id": "115306037822201585694"
//       },
//       "follower": {
//         "google_id": "115306037822221333694"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delink Following:
// mutation delinkFollowing {
//   delink_following(following_data: {person_google_id: "115306037822201585694", follower_google_id: "115306037822221333694"}) {
//     person {
//       google_id
//     }
//     follower {
//       google_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_following": {
//       "person": {
//         "google_id": "115306037822201585694"
//       },
//       "follower": {
//         "google_id": "115306037822221333694"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Link Person Album:
// mutation linkPersonAlbum {
//   link_person_album(person_album_data: {person_google_id: "115306037822201585694", album_id: "album_id1"}) {
//     person {
//       google_id
//     }
//     album {
//       album_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "link_person_album": {
//       "person": {
//         "google_id": "115306037822201585694"
//       },
//       "album": {
//         "album_id": "album_id1"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }


// ##Delink Person Album:
// mutation delinkPersonAlbum {
//   delink_person_album(person_album_data: {person_google_id: "115306037822201585694", album_id: "album_id1"}) {
//     person {
//       google_id
//     }
//     album {
//       album_id
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_person_album": {
//       "person": {
//         "google_id": "115306037822201585694"
//       },
//       "album": {
//         "album_id": "album_id1"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Link Person Comment:
// mutation linkPersonComment {
//   link_person_comment(person_comment_data: {person_google_id: "115306037822201585694", comment_key: 6}) {
//     person {
//       google_id
//     }
//     comment {
//       text
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "link_person_comment": {
//       "person": {
//         "google_id": "115306037822201585694"
//       },
//       "comment": {
//         "text": "Comment 2"
//       },
//       "ok": true,
//       "message": "Sucess"
//     }
//   }
// }

// ## Delink Person Comment:
// mutation delinkPersonComment {
//   delink_person_comment(person_comment_data: {person_google_id: "115306037822201585694", comment_key: 6}) {
//     person {
//       google_id
//     }
//     comment {
//       text
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_person_comment": {
//       "person": {
//         "google_id": "115306037822201585694"
//       },
//       "comment": {
//         "text": "Comment 2"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Link Album Comment:
// mutation linkAlbumComment {
//   link_album_comment(album_comment_data: {album_id: "album_id1", comment_key: 6}) {
//     album {
//       album_id
//     }
//     comment {
//       text
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "link_album_comment": {
//       "album": {
//         "album_id": "album_id1"
//       },
//       "comment": {
//         "text": "Comment 2"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delink Album Comment:
// mutation delinkAlbumComment {
//   delink_album_comment(album_comment_data: {album_id: "album_id1", comment_key: 6}) {
//     album {
//       album_id
//     }
//     comment {
//       text
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delink_album_comment": {
//       "album": {
//         "album_id": "album_id1"
//       },
//       "comment": {
//         "text": "Comment 2"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }