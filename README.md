### BSK2-Frontend
This is frontend part for 
[BSK2-Backend](https://github.com/stasbar/BSK2-Backend)

### Technologies
- **ReactJS** - Library for building UI
- **Material-UI** - React components for material design
- **Webpack** - Module bundler  
- **Flow** - Static type checker for JS 

### How to run
```
$ yarn start
```
and the website will be available on *localhost:3030*

![welcome](https://i.imgur.com/1SywC6C.png)

## Signup
You can sign up by sending standard form to **POST /signup**
![signup](https://i.imgur.com/ks3gJ19.png)

## Login POST -> /login -redirect-> /myRoles
Then when you want to **/login**, first you will be redirected to **/myRoles**, in order to select role for current session.
![login](https://i.imgur.com/mpcteJz.png)

## Pick role -> POST /login
When you pick your role and send complete form to **POST /login** you will receive sessionId in cookie
![pick-role](https://i.imgur.com/zE4KQLB.png)

Now let's take a look on restricted default role called subject_stasbar_1
![default-role](https://i.imgur.com/RaWECZ9.png)

as we can see the default role, doesn't allow us to access all users which require users:read:*
![deny-all-users](https://i.imgur.com/ylhDoYB.png)

although we can create new car rent
![create-new-rent](https://i.imgur.com/w05WLrj.png)

we can't read all rents created by all users
![read-all-rent](https://i.imgur.com/grMWhSf.png)

But when we switch to **moderator** role, we can do so
![read-all-rent-with-moderator](https://i.imgur.com/hFt8SYk.png)


Now, let's switch to **admin** role and preview whole database

## Users GET -> /users
![users](https://i.imgur.com/L42BNso.png)

## Mechanics GET -> /mechanics
![mechanics](https://i.imgur.com/ULBfL4I.png)

## Cars GET -> /cars
![cars](https://i.imgur.com/9t4iuqi.png)

## New rent POST -> /rents
![new-rent](https://i.imgur.com/nZZaxhM.png)

## Rents GET -> /rents
![rents](https://i.imgur.com/gCYeLpL.png)

## Repairs GET -> /repairs
![repairs](https://i.imgur.com/IAuSVr8.png)

## Roles GET -> /roles
![roles](https://i.imgur.com/ZFNdMfw.png)







