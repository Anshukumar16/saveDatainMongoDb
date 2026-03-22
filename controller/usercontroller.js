import userList from '../model/userModal.js';

export function handleUsers (req, res){
    const usersData = userList();
    console.log(usersData);
    res.render('users', { users:usersData});
};