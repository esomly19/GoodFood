const bcrypt = require('bcryptjs');
export default function passwordEncrypt(password){
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}