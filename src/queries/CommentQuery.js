// ### Create Comment:
// mutation createComment {
//   create_comment(comment_data: {text: "Comment 1", timestamp: "2019-06-02T13:44:31+05:30"}) {
//     comment {
//       text
//       timestamp
//     }
//     key
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "create_comment": {
//       "comment": {
//         "text": "Comment 1",
//         "timestamp": "2019-06-02T13:44:31+05:30"
//       },
//       "key": 3,
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }

// ### Query Comment:
// query queryComment {
//   comment(key: 3) {
//     key
//     text
//     timestamp
//   }
// }

// **Response:**
// {
//   "data": {
//     "comment": {
//       "key": 3,
//       "text": "Comment 1",
//       "timestamp": "2019-06-02T13:44:31+05:30"
//     }
//   }
// }

// ### Delete Comment:
// mutation deleteComment {
//   delete_comment(comment_data: {key: 3}) {
//     comment {
//       text
//       timestamp
//     }
//     ok
//     message
//   }
// }

// **Response:**
// {
//   "data": {
//     "delete_comment": {
//       "comment": {
//         "text": "Comment 1",
//         "timestamp": "2019-06-02T13:44:31+05:30"
//       },
//       "ok": true,
//       "message": "Success"
//     }
//   }
// }