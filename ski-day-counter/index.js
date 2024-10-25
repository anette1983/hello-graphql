const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
	type SkiDay {
		id: ID!
		date: String!
		mountain: String!
		conditions: Conditions
	}

	enum Conditions {
		POWDER
		HEAVY
		ICE
		THIN
	}

	type Query {
		totalDays: Int!
		allDays: [SkiDay!]!
	}
`;
// const resolvers = {};

const server = new ApolloServer({
	typeDefs,
	// resolvers,
	mocks: true,
});

server.listen().then(({ url }) => console.log(`Server running at ${url}`));
