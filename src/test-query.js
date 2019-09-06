import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import React from 'react';

export default function GetAlice() {
    const {loading, error, data} = useQuery(gql`
        query queryPerson {
            person(google_id: "115306037822201585694") {
                google_id
                email
                verified_email
                name
                given_name
                family_name
                picture
                locale
            }
        }
    `);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }

    return data;
}
