This project just for task.
##Conde` Nast Code Challange

##Table of Contents:
1. Available Scripts 
2. Steps for use 
3. Requirement
4. Description and Important Notes
5. Rest API related 
6. Technical SKill 



##Available Scripts

In the project directory, you can run:

1.`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

2.`npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

3.`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

4.`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

##Steps for use
1. Take a git clone https://github.com/kaminiDevelopmentHub/Genpact_React_Task.git.REST
2. Go to in this folder.
3. Run npm install command.
4. Run npm start command.
5. Run http://localhost:3000/

##Requirement

Build a JavaScript application that shows the latest news from the United Kingdom, using the newsapi.org service.

Running the app we should be able to see the latest UK news. The user should have the ability to filter by keywords (see everything endpoint api). Optionally, if the user clicks on a news item it will navigate to a page displaying the full news article selected.

##Description and Important Notes

Important Keys :

1. Created a React Redux-Saga app.
2. service workers for call third party api
3. Saga for middleware
4. I have written every case handling of API response like a. Success b. Failure c. Records not available . 
5. Used React-Router for routing and redirect 
6. Comman Static Header 
7. Categories, Recent news, search by and search text box are placed in Sidebar's in left side and created separate component for each
8. Default page load componenent called NewsList are has the latest news coming from given API
9. Detailed news will be shown in a new component on click of Reacd Moren button.
10. Search functionality workedon keywords, after type the text press enter and search will happen with onSubmit

##Rest API related 

 * If Auth Key will expire then open below url
    * return  axios.get(`http://localhost:3000/dummyData/${category}.json`)

* If Auth Key will expire then comment below url
    * return axios.get(`https://newsapi.org/v2/everything?q=${category}&apiKey=1fc1cf9ba4634f988745e2d7d92e5796`)
    
**Note:Currently runing token: 1fc1cf9ba4634f988745e2d7d92e5796 !**

##Technical Skills

1. Operating Systems : Mac OS

2. Databases :: Json API

3. Server Side Languages : Rest API

4. Design : HTML5, CSS3 , Bootstrap

5. Technology : React-Redux-Saga

6. Coding Editor : Visual Studio.

7. Local Server : Node Server.

8. Scripting Languages : JavaScript,ECMS-Script6,NodeJS,NPM,ReactJS-Redux-Saga,babel

9. Version Control Tool : GIT

