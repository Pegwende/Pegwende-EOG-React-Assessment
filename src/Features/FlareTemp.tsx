/* eslint-disable max-len */
import React from 'react';
import Card from '@mui/material/Card';
import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
  cache: new InMemoryCache(),
});

const FlareTemp = () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const { loading, error, data } = useQuery(gql`
  query Query($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
      value
    }
  }
  `, {
    variables: {
      metricName: 'flareTemp',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : </p>;
  if (!data) return <p>Data not found</p>;
  const { value } = data.getLastKnownMeasurement;
  return (
    // eslint-disable-next-line react/style-prop-object
    <div color="success">
      <h3> flareTemp</h3>
      <h1> {value} </h1>
    </div>
  );
};

export default () => (
  <Card sx={{ width: 200, padding: 2 }} color="success">
    <ApolloProvider client={client}>
      <FlareTemp />
    </ApolloProvider>
  </Card>

);
