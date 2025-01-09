# Split Money Application 💸

## Overview 📖

Split Money is a web application designed to help users manage and split expenses among a group of people. It simplifies the process of tracking shared expenses and ensures everyone pays their fair share.

## Features ✨

- 🔒 User authentication and authorization
- 👥 Create and manage groups
- ➕ Add and track expenses
- 🔄 Split expenses among group members
- 📊 View expense summaries and reports
- 📱 Responsive design for mobile and desktop

## Tech Stack 🛠️

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Netlify

## Installation 🛠️

To run this application locally, follow these steps:

1. **Clone the repository** 📂:
    ```sh
    git clone https://github.com/fncreator22/Split-Money-application
    cd split-money
    ```

2. **Install dependencies** 📦:
    ```sh
    npm install
    ```

3. **Set up environment variables** 🔧:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

4. **Run the development server** 🚀:
    ```sh
    npm run dev
    ```

5. **Open** 🌐 [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment 🌐

The application is deployed at [https://split-money-app.netlify.app/](https://split-money-app.netlify.app/)

## Usage 🚀

1. **Sign Up / Log In**: Create an account or log in with your existing credentials.
2. **Create a Group**: Set up a group for your shared expenses.
3. **Add Expenses**: Add expenses to the group, specifying the amount and the members involved.
4. **Split Expenses**: Automatically split expenses among group members.
5. **View Reports**: Check the summary and detailed reports of your expenses.

## Contributing 🤝

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact 📧

For any inquiries or feedback, please contact us at [email@example.com](mailto:email@example.com).