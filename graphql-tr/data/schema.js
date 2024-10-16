import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Product {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
        stores: [Store]!
    }

     enum Soldout {
        SOLDOUT
        ONSALE
    }

    type Store {
        store: String
    }

    type Category {
        id: ID
        category: String
        description: String
    }

    type Query {
        getProduct(id: ID): Product
        getAllProducts: [Product]
        getCategory(id: ID): Category
        getAllCategories: [Category]
    }

     input StoreInput {
        store: String
    }

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Float
        soldout: Soldout
        inventory: Int
        stores: [StoreInput]!
    }

    input CategoryInput {
        category: String
        description: String
    }


    type Mutation {
        createProduct(input: ProductInput): Product
        createCategory(input: CategoryInput): Category
        updateProduct(input: ProductInput): Product
        deleteProduct(id: ID!): String
    }

    `);

export default schema;
