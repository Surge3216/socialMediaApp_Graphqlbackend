import App from './App';
import ApolloClient from 'apollo-client';
import { inMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider, InMemoryCache } from '@apollo/react-hooks'

const httpLink = createHttpLink({
    url: 'https://localhost:5000'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

export default(
    <ApolloProvider client = {client}>
        <App/>
    </ApolloProvider>
)