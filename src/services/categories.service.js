import axios from 'axios'

class CategoriesService {
    fetchCategories(){
        return axios.get('https://techsavanna.technology/halfbookspos/booksApi/api/categories.php')
    }

}
export default new CategoriesService()