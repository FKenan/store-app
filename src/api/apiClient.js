import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/";

// Axios interceptors kullanarak istek ve yanıtları yönetiyoruz.
// İstek gönderilmeden önce veya yanıt alındıktan sonra bazı işlemler yapabiliriz.
// Örneğin, istek öncesi veya sonrası loglama, hata yönetimi gibi işlemler yapabiliriz.
// Bu sayede API isteklerini merkezi bir yerden yönetmiş oluyoruz.
// hata yönetimlerini tek bir yerde toplayarak, uygulamanın diğer kısımlarında hata yönetimini basitleştirmiş oluyoruz.
axios.interceptors.response.use(
  (response) => {
    console.log("success");
    return response; // Başarılı bir yanıt alındığında response'u döndürdük
  },
  (error) => {
    console.log("error");
    return Promise.reject(error.message); // Hata mesajını döndürdük
  }
);

// methods ile yöntemleri tanımladık. products ile de bu yöntemleri kullanarak ürünlerle ilgili işlemleri tanımladık.
// requests ile de bu ürün işlemlerini dışarıya açtık. Böylece diğer dosyalarda bu işlemleri kullanabileceğiz.
// Bu yapı sayesinde API isteklerini merkezi bir yerden yönetmiş olduk.
const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
  post: (url, body) => axios.post(url, body).then((response) => response.data),
  put: (url, body) => axios.put(url, body).then((response) => response.data),
  delete: (url) => axios.delete(url).then((response) => response.data),
};

const products = {
  list: () => methods.get("products"), // baseurl üstüne eklenir
  details: (id) => methods.get(`products/${id}`),
};

const requests = {
  products,
};

export default requests;
