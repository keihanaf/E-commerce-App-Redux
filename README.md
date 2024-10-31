# E-commerce Application-Redux

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

This project is a fully functional e-commerce application built using React and Vite. It leverages modern web technologies to provide a seamless shopping experience with features such as product browsing, detailed product views, a shopping cart, and checkout functionality.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Listing**: Browse a wide range of products with images, titles, and prices.
- **Product Details**: View detailed information about each product, including descriptions and categories.
- **Shopping Cart**: Add products to the cart, view the total price, and manage item quantities.
- **Checkout Process**: Complete purchases with a simple checkout interface.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Search Functionality**: Search for products by name.
- **Category Filtering**: Filter products by category.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that provides a development server with hot module replacement (HMR).
- **Redux Toolkit**: For state management, particularly for managing the shopping cart and product data.
- **React Router**: For routing and navigation within the application.
- **Axios**: For making HTTP requests to fetch product data from an API.
- **CSS Modules**: For styling components with scoped CSS.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/keihanaf/E-commerce-App-Redux.git
   ```

2. Navigate to the project directory:
   ```bash
   cd E-commerce-App-Redux
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173` to view the application.

## Usage

- Navigate to the **Products** page to view all available products.
- Click on a product to view its details.
- Use the **Add to Cart** button to add items to your shopping cart.
- Access the **Checkout** page to complete your purchase.
- Use the search bar to find specific products or filter by category.

## Folder Structure

The project is organized as follows:

```
src/
├── components/          # Reusable components
│   ├── BasketCard.jsx   # Component for displaying individual items in the cart
│   ├── BasketSidebar.jsx # Sidebar component for cart summary
│   ├── Card.jsx         # Component for displaying individual products
│   ├── Loader.jsx       # Loading spinner component
│   ├── SearchBox.jsx    # Search input component
│   └── Sidebar.jsx      # Sidebar for category filtering
├── constant/           # Constant values (e.g., categories)
│   └── list.js         # List of product categories
├── features/           # Redux slices for state management
│   ├── cart/           # Cart slice for managing cart state
│   └── product/        # Product slice for managing product data
├── helpers/            # Helper functions
│   └── helper.js       # Utility functions for product handling
├── Layout/             # Layout components (e.g., header, footer)
│   ├── Layout.jsx      # Main layout component
│   └── Layout.module.css # Styles for layout components
├── middleware/         # Redux middleware
│   └── localStorageMiddleware.js # Middleware for persisting cart state in local storage
├── pages/              # Page components for routing
│   ├── CheckoutPage.jsx # Page for checkout process
│   ├── DetailsPage.jsx  # Page for product details
│   ├── PageNotFound.jsx # 404 Not Found page
│   └── ProductsPage.jsx # Page for displaying all products
├── services/           # API service configuration
│   └── config.js       # Axios configuration for API requests
├── app/                # Redux store configuration
│   └── store.js        # Store setup and middleware configuration
├── index.css           # Global styles
└── App.jsx             # Main application component
```

### Explanation of Folder Structure

- **components/**: Contains all reusable components that can be used across different pages, such as product cards, loading spinners, and sidebars.
- **constant/**: Holds constant values used throughout the application, such as category lists.
- **features/**: Contains Redux slices for managing different parts of the application state, including the shopping cart and product data.
- **helpers/**: Includes utility functions that assist with various operations, such as filtering and searching products.
- **Layout/**: Contains layout components that define the overall structure of the application, including headers and footers.
- **middleware/**: Contains middleware for Redux, such as persisting the cart state in local storage.
- **pages/**: Contains components that represent different pages in the application, such as the checkout page and product details page.
- **services/**: Contains API service configurations, including Axios setup for making HTTP requests.
- **app/**: Contains the Redux store configuration and middleware setup.
- **index.css**: Global styles that apply to the entire application.
- **App.jsx**: The main application component that sets up routing and renders the layout.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## Languages and Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,redux,vite,css,vscode" />
  </a>
</p>

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


