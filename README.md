
# MyPlaces MERN Project

Pet Project built with Node.js, React, Express, MongoDB


#### Live Project Link: https://my-places-mern-64298.web.app


## Installing
**Environment Variables**

To run this project, you will need to add the following environment variables.

_backend/.nodemon.json_ :

```javascript
{
    "env": {
        "DB_USER": "userName",
        "DB_PASSWORD": "password",
        "DB_NAME": "your-DB-name",
        "GOOGLE_API_KEY": "key",
        "JWT_KEY": "secret-key",
        "AWS_SECRET_ACCESS_KEY": "secret-key-aws",
        "AWS_ACCESS_KEY_ID": "key-id",
        "AWS_REGION": "region",
        "AWS_BUCKET_NAME": "backet-name"
    }
}
```

_frontend/.env_ :

```javascript
REACT_APP_GOOGLE_API_KEY=your-google-api-key
REACT_APP_BACKEND_URL=http://localhost:5000/api
REACT_APP_ASSET_URL=http://localhost:5000
```

**Install Dependencies (Frontend)**
```bash
cd frontend
npm i
```
**Install Dependencies (Backend)**
```bash
cd backend
npm i
```
## Running the app
Open a terminal on "backend" directory
```bash
npm start
```
Then open another terminal on "frontend" directory
```bash
cd frontend
npm start
```
