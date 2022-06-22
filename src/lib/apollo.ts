import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ognrk705bg01xsflbibytd/master',
    cache: new InMemoryCache()
})