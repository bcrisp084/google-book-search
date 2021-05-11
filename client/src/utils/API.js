import axios from "axios";

export default {
    getBook: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    deleteBook: function(id) {
        return axios.delete("/api/book/" + id).then(result => result.data);
    },
    saveBook: function(boodData) {
        return axios.post("/api/book", boodData).then(result => result.data);
    },
    savedBooks: function() {
        return axios.get("api/book").then(result => result.data);
    }
};