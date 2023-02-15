# Restaurant Review App
This is a web app that assists residents of bristol review restaurants


## Table of Contents

-   [Technologies](#technologies)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Usage](#usage)
    -   [Testing](#testing)
    -   [Documentation](#documentation)
    -   [Deployment](#deployment)
    -   [Limitations](#limitations)
    -   [Next Steps](#next-steps)

## Technologies
-   [React JS](https://reactjs.org/) - Runtime Environment
-   [Create React App](https://create-react-app.dev/) - Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.
-   [Firebase](https://firebase.google.com/) - Firebase is an app development platform that helps you build and grow apps. Backed by Google and trusted by millions of businesses around the world.

## Getting Started


### Installation

-   git clone [Restaurant Review](https://github.com/officialyenum/restaurant-review-app.git)
-   Run `npm install` to install packages.
-   rename .env.example to .env and fill in your firebase credentials
-   Run `npm start` to run the application in development mode.

### Usage

This is the basic flow of the application.
-   Login - uses Firebase Auth to authenticate users
-   Register - uses Firebase Auth create users and Firestore to save users
-   Search - uses axios and https://opendata.bristol.gov.uk/api records 
    Search for list of restaurants using  the search box
-   Show Details of a particular Restaurant
-   Drop A Review
        This allows users drop their reviews on a restaurant and saves to the firestore database
-   Review List
-   Check Profile
        This enables authenticated users to view all the reviews made by them
    
### Testing
-   No Test Implemented


### Documentation

-   N/A

### Deployment
This project is hosted on [vercel](https://vercel.com/)

-   Please click [here](https://restaurant-review-app-sooty.vercel.app/) to access the hosted application

### Limitations
-   Testing is not implemented
-   Documentation is not implemented

### Next Steps
-   Expand Search Area