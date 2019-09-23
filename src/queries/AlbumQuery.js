// ### Create Album:
// mutation createAlbum {
//   create_album(album_data: {album_id: "album_id1", private: true}) {
//     album {
//       album_id
//       private
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "create_album": {
//       "album": {
//         "album_id": "album_id1",
//         "private": true
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Query Album:
// query queryAlbum {
//   album(album_id: "album_id1") {
//     album_id
//     private
//   }
// }

// **Response:**
// {
//   "data": {
//     "album": {
//       "album_id": "album_id1",
//       "private": true
//     }
//   }
// }

// ### Delete Album:
// mutation deleteAlbum {
//   delete_album(album_data: {album_id: "album_id1"}) {
//     album {
//       album_id
//       private
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_album": {
//       "album": {
//         "album_id": "album_id1",
//         "private": true
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Delete Album By Force:
// **Important Note:** This will delete all the associated information too.
// mutation deleteAlbumByForce {
//   delete_album_by_force(album_data: {album_id: "album_id1"}) {
//     album {
//       album_id
//       private
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_album": {
//       "album": {
//         "album_id": "album_id1",
//         "private": true
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }