const { MongoClient } = require('mongodb');

// Netlify allows you to set Environment Variables safely in their dashboard
const mongoClient = new MongoClient(process.env.MONGODB_URI || "your_mongodb_connection_string_here");

const clientPromise = mongoClient.connect();

exports.handler = async function (event, context) {
    try {
        const database = (await clientPromise).db('my_database');
        const collection = database.collection('my_collection');
        
        // Example: Fetching some data from the database
        // const results = await collection.find({}).toArray();
        
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                message: "Hello from the backend!", 
                dbStatus: "MongoDB code is ready!" 
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};