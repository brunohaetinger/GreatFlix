# GreatFlix

This project is a serverless solution that is hosted at AWS: `http://greatflix.s3-website-us-west-1.amazonaws.com`

CI/CD pipeline:
- Git repository push
- Jenkins (hosted on AWS EC2) is triggered
- Jenkins pull the repository code
- Jenkins build the project
- Jenkins serve the output on AWS S3

## How to Run locally
 
Clone the repository and run `npm install && npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Users

Inside `src\assets\users.json` are the initial user dataset. To LogIn, anyone of them can e used. Some usernames to use are: `charles`, `esther`, `bob`;
For anyone of the initial users, the password is `123`.