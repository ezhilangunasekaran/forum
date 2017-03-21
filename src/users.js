import API from './api';

let Users ={
    findActive(){
        return API.fetch("activeUsers");
    }
}
export default Users;