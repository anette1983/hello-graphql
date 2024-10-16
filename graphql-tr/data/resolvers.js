import { Widgets } from './dbConnectors';

class Product {
	constructor(id, { name, description, price, soldout, stores }) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.soldout = soldout;
		this.stores = stores;
	}
}

const productDatabase = {};

const resolvers = {
	// getProduct: ({ id }) => {
	// 	return new Product(id, productDatabase[id]);
	// },
	getProduct: async ({ id }) => {
		try {
			const product = await Widgets.findById(id);
			return product;
		} catch (error) {
			throw new Error(error);
		}
	},
	// getAllProducts: () => {
	// 	return Object.keys(productDatabase).map(
	// 		(id) => new Product(id, productDatabase[id])
	// 	);
	// },
	createProduct: ({ input }) => {
		// let id = require('crypto').randomBytes(10).toString('hex');
		// productDatabase[id] = input;
		// return new Product(id, input);
	},
};

export default resolvers;
