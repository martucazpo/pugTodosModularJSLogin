import {Strategy} from "passport-local"
import bcrypt from "bcryptjs"
import db from "../db/index.js"


const validate = (passport) =>{
    passport.use(new Strategy({usernameField:"email"},function verify(username, password, cb) {
        db
        .User
        .findOne({email:username})
        .then(data =>{
            if(!data){
                return cb(null, false, { message: 'Incorrect username or password.' });
            }else{
                if(!bcrypt.compareSync(password, data.password)){
                    return cb(null, false, { message: 'Incorrect username or password.' });
                } else {
                    return cb(null, data)
                }
            }
        })
        .catch(err => cb(err)); 
      }));


    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture
          });
        });
      });
      
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
      });
}

export default validate