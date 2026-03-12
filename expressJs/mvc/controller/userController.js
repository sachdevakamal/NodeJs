import { userDetails } from "../model/users.js";

export function getUsers(req, res) {
    const usersData = userDetails();
    console.log(usersData);
    res.render('userDetails', { users: usersData });
}