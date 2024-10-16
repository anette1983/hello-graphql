import { Widgets, Categories } from './dbConnectors';

const resolvers = {
	getProduct: async ({ id }) => {
		try {
			const product = await Widgets.findById(id);
			return product;
		} catch (error) {
			throw new Error(error);
		}
	},

	getAllProducts: async () => {
		try {
			const products = await Widgets.find();
			return products;
		} catch (error) {
			throw new Error(error);
		}
	},

	createProduct: async ({ input }) => {
		const newWidget = new Widgets({
			name: input.name,
			description: input.description,
			price: input.price,
			soldout: input.soldout,
			inventory: input.inventory,
			stores: input.stores,
		});
		newWidget.id = newWidget._id;

		try {
			await newWidget.save();
			return newWidget;
		} catch (error) {
			throw new Error(error);
		}
	},
	updateProduct: async ({ input }) => {
		try {
			const updateWidget = await Widgets.findOneAndUpdate(
				{ _id: input.id },
				input,
				{ new: true }
			);
			return updateWidget;
		} catch (error) {
			throw new Error(error);
		}
	},
	deleteProduct: async ({ id }) => {
		try {
			await Widgets.deleteOne({ _id: id });
			return 'Successfully deleted widget';
		} catch (error) {
			throw new Error(error);
		}
	},
	getCategory: async ({ id }) => {
		try {
			const category = await Categories.findByPk(id);
			return category;
		} catch (error) {
			throw new Error(error);
		}
	},

	getAllCategories: async () => {
		try {
			const categories = await Categories.findAll();
			return categories;
		} catch (error) {
			throw new Error(error);
		}
	},

	createCategory: async ({ input }) => {
		try {
			const newCategory = await Categories.create({
				category: input.category,
				description: input.description,
			});
			return newCategory;
		} catch (error) {
			throw new Error(error);
		}
	},
};

export default resolvers;
