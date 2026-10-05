exports.handler = async (event, context) => {
    try {
      // You can process any frontend requests here later. 
      // For now, it just sends a successful response back.
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          success: true, 
          message: "Backend is running successfully without a database!" 
        }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };