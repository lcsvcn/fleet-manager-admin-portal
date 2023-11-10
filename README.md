# Fleet Manager Admin Portal

Welcome to the Fleet Manager Admin Portal! This web application allows administrators to efficiently manage and oversee the entire fleet.

## Getting Started

Follow these instructions to get the admin portal up and running on your local machine.

### Prerequisites

- Node.js: Make sure you have Node.js version 18 installed. You can download it [here](https://nodejs.org/).
- pnpm: Make sure you have `pnpm` installed. You can install it globally using the following command:

  ```bash
  npm install -g pnpm
  ```

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/lcsvcn/fleet-manager-admin-portal.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fleet-manager-admin-portal
   ```

3. Install dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

4. Open the `/constants/index.js` file and uncomment the testing baseUrl:

   ```javascript
   // Use below for testing
   export const baseUrl = "http://localhost:3100/api/v1";
   ```

### Backend Dependency

The Fleet Manager Admin Portal depends on the Fleet Manager Backend. Make sure to set up and run the backend server by following the instructions in the [Fleet Manager Backend repository](https://github.com/lcsvcn/fleet-manager-backend).

### Running the Admin Portal

1. Start the development server:

   ```bash
   pnpm start
   ```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the admin portal.

3. The Admin user email is test@gmail.com and user password is test. This user is hardcoded an unique, there is no other user that will allow login.

### CORS Issues (Production)

**Note:** The production version of this app may experience CORS (Cross-Origin Resource Sharing) issues, especially if the backend is hosted on a different domain. Ensure the backend server's CORS settings allow requests from your production domain.

## Configuration

In the `/constants/index.js` file, configure the `baseUrl` for API requests. Ensure it matches the appropriate value for your Fleet Manager Backend API.

```javascript
// Use below for testing
export const baseUrl = "http://localhost:3100/api/v1";
```

## Usage

1. Log in to the Fleet Manager Admin Portal using your administrator credentials.
2. Utilize the dashboard to manage and oversee the entire fleet.
3. Customize settings and preferences as needed.

## Contributing

We welcome contributions! If you find a bug or have a feature request, please [open an issue](https://github.com/lcsvcn/fleet-manager-admin-portal/issues) or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
