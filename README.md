# Social Network API

In this project, I have developed an API for a social network web application. The goal was to create a robust and scalable solution that can handle large amounts of unstructured data. To achieve this, I used MongoDB as the NoSQL database, Express.js for routing, and Mongoose as the ODM (Object Data Modeling).

The API allows users to publish their thoughts, react to friends' thoughts, and manage their friend list. It follows the Model-View-Controller (MVC) architectural pattern, ensuring a well-structured and maintainable codebase.

To meet the project requirements, I started by setting up the project structure and configuring the necessary dependencies. I then designed the database schema and created the User and Thought models using Mongoose. Next, I implemented the routes and controllers for user and thought management, including CRUD (Create, Read, Update, Delete) operations.

Additionally, I developed routes and controllers for reactions to thoughts, enabling users to express their responses. I also implemented functionality for managing a user's friend list, allowing users to add and remove friends as needed.

To ensure proper functionality, I thoroughly tested the API routes using Insomnia. This helped me identify and address any issues or bugs that arose during development. I also formatted queried timestamps correctly, providing a consistent and user-friendly display of time-related data.

Finally, I recorded a walkthrough video demonstrating the functionality of the social network API. The video showcases the application's features, including server startup, testing of API routes using Insomnia, and performing various CRUD operations on users, thoughts, reactions, and friend lists.

Overall, this project provides a solid foundation for building a social networking platform that can handle the demands of a large user base. The API's scalability, flexibility, and adherence to best practices make it a powerful tool for creating engaging and interactive social network applications.

## User Story

- AS A social media startup
- I WANT an API for my social network that uses a NoSQL database
- SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

- GIVEN a social network API
- WHEN I enter the command to invoke the application
- THEN my server is started and the Mongoose models are synced to the MongoDB database
- WHEN I open API GET routes in Insomnia for users and thoughts
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete users and thoughts in my database
- WHEN I test API POST and DELETE routes in Insomnia
- THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Approach

To accomplish the project requirements, the following approach was taken:

1. Set up the project structure and directories, including the necessary dependencies (Express.js, Mongoose, etc.).
2. Design the database schema and create the User and Thought models using Mongoose.
3. Configure the routes and controllers for handling user and thought data.
4.Implement the required API routes for user and thought management, including GET, POST, PUT, and DELETE methods.
5. Develop the routes and controllers for reactions to thoughts, including POST and DELETE methods.
6. Create the routes and controllers for managing a user's friend list, including POST and DELETE methods.
7. Ensure that the server starts successfully and that the Mongoose models sync with the MongoDB database.
8. Test the API routes using Insomnia to verify proper functionality.
9. Format queried timestamps correctly using the chosen JavaScript date library or the native JavaScript Date object.
10. Record a walkthrough video demonstrating the application's functionality and meeting the technical acceptance criteria.

## Completed tasks

- Set up project structure and directories
- Configured necessary dependencies (Express.js, Mongoose)
- Designed the database schema and created the User and Thought models using Mongoose
- Implemented routes and controllers for user and thought management
- Developed routes and controllers for reactions to thoughts
- Created routes and controllers for managing a user's friend list
- Ensured server startup and synchronization of Mongoose models with MongoDB
- Tested API routes using Insomnia for functionality and correctness
- Properly formatted queried timestamps
- Recorded a walkthrough video demonstrating the application's functionality

## Conclusion

In conclusion, this project successfully builds an API for a social network web application, leveraging MongoDB as the NoSQL database, Express.js for routing, and Mongoose as the ODM. By adhering to the user story and acceptance criteria, the API enables users to share their thoughts, react to friends' thoughts, and manage their friend list. The walkthrough video demonstrates the application's features and meets the technical acceptance criteria. This API provides a foundation for a social networking platform that can handle large amounts of unstructured data, supporting a seamless user experience.

## Link

The below is a link to the walkthrough video: 
https://www.loom.com/share/86853cb1a1ae4be2abff4c914352bb51 

## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License .
