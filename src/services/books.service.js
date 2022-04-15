import axios from 'axios'

class BooksService {
    fetchBooks(){
        return axios.get('https://techsavanna.technology/halfbookspos/booksApi/api/booksApi.php')
    }
    fetchWarehourses(){
        return axios.get('https://techsavanna.technology/halfbookspos/booksApi/api/categories.php')
    }

}
export default new BooksService()