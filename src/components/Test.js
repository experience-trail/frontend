import React from 'react';
import {useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
const CREATE_PERSON = gql`
    mutation createPerson {
        create_person(
            person_data: {
                google_id: "115306037822201585694"
                email: "alice@gmail.com"
                verified_email: true
                name: "Alice T"
                given_name: "Alice"
                family_name: "Taylor"
                picture: "https://lh3.googleusercontent.com/-SSRfy59UzZE/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reK0_32sczjyiZbxk8Nogs-xSb7_w/photo.jpg"
                locale: "en"
            }
        ) {
            person {
                google_id
                email
                verified_email
                name
                given_name
                family_name
                picture
                locale
            }
            ok
            message
        }
    }
`;
function Test() {
    const [x, setX] = React.useState({name: 'Mike'});
    const {name} = x;
    const [run, {error, data}] = useMutation(
        CREATE_PERSON,
        //   , {
        //   variables: { rocket: { model: model, year: +year, stock: +stock } },
        //   refetchQueries: ["getRocketInventory"]
        // }
    );
    console.log(data);
    console.log(error, 'err');

    return (
        <div>
            <p>Hello</p>
            <p>Testing something new!</p>
            <button onClick={run}>Run Mutation</button>
        </div>
    );
}

export default Test;
