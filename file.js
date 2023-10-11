module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.method === 'GET') {
        // Handle GET requests
        context.res = {
            body: 'Hello, Azure Function!'
        };
    } else {
        // Handle other HTTP methods
        context.res = {
            status: 400,
            body: 'This function only supports GET requests.'
        };
    }
};
