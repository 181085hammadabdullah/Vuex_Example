import Api from "./Api";
const END_POINT = 'getall';
const END_POINT1 = 'delete';
const END_POINT2 = 'addtodo';
const END_POINT3 = 'getone';
const END_POINT4 = 'update';
export default {
    all() {
        return Api.get(END_POINT);
    },
    delete(id) {
        return Api.delete(`${END_POINT1}/${id}`);
    },
    store(data) {
        return Api.post(END_POINT2, data);
    },
    edit(id) {
        return Api.get(`${END_POINT3}/${id}`);
    },
    Update(data) {

        return Api.put(`${END_POINT4}/${data.id}`, data);
    },
}