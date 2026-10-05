exports.handler = async (event, context) => {
    try {
      const mockDatabase = [
        { id: 101, vehicle: "Toyota Corolla", status: "Available", rate: 40 },
        { id: 102, vehicle: "Honda Civic", status: "Rented", rate: 45 },
        { id: 103, vehicle: "Ford Mustang", status: "Available", rate: 80 }
      ];
  
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(mockDatabase),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  };