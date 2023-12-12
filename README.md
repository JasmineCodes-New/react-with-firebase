# How To View This Project: 
### You can view this project by cloning the repository and running 'npm start' in the terminal where it will display on your local network. I have not yet gotten this site to deploy. 

# Getting Started:
### Clone this app, run npm install, then run npm start. Make a login/register your login and then login in with that. 

# Final Features:
### Manifest.json found in the public folder along with sw.js (the service worker) - sw.js also has the code for push notifications, config for firebase in Config.js, indexedDB outside of folders along the bottom, index.js implements service worker, app.js has the routing. 

# Features of This Web App: 
#### 
This is a basic shopping cart app made with React and secured with Firebase. 

This site is secured with firebase. There are login, register, and logout features as well as storage of those login details. 

![Screenshot 2023-04-14 130257](https://user-images.githubusercontent.com/104696443/232111522-2f562178-d8cd-4b14-a5bd-fbd34cb45c88.png)

![Screenshot 2023-04-14 130304](https://user-images.githubusercontent.com/104696443/232111557-25928bcf-8bff-4037-aec8-04f0008c3bbb.png)

There are several routes available in this app: 

![Screenshot 2023-04-14 131128](https://user-images.githubusercontent.com/104696443/232111896-670ee4d2-3871-4665-b283-03c15815a703.png)

You can add products through the add products route, see all products available in the '/' (home) route, see all products in your cart in the cartproducts route, and cashout through the route associated with that link. 

All CRUD operations are managed with the Firestore Database through Firebase: 

![Screenshot 2023-04-14 130456](https://user-images.githubusercontent.com/104696443/232112685-90b3d9e7-412f-482e-97f1-85e9a28d95f7.png)

Although there is no option as of yet to delete any of the products from the homescreen of the app itself, I am able to delete them through the database and users are able to delete items from their cart, add more than one item of the same product, and add more of different products to the cart. 

![Screenshot 2023-04-14 130356](https://user-images.githubusercontent.com/104696443/232113141-6a9af8da-4c0c-4ad1-a7ff-c93d308d7e9c.png)

Users are also able to see a cart summary of their total and the total number of items they have in their cart. 

A challenge I am still facing is the circular routes from cart to cart checkout and back again as well as home. I do have proper error handling for it but it is something I would like to figure out in the future. 

![Screenshot 2023-04-14 130216](https://user-images.githubusercontent.com/104696443/232113430-fa2b4910-65d0-450d-9f59-ce55044ee9ef.png)

This site is also responsive to the user's info entered, displaying the full name or whatever name is entered and stored in the database along the navbar. 

![Screenshot 2023-04-14 130346](https://user-images.githubusercontent.com/104696443/232113815-608f64a8-f104-4761-b4ab-05bd011a2826.png)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
