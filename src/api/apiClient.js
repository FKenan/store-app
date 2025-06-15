import axios from "axios";
import { toast } from "react-toastify";

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
    const { data, status } = error.response;
    switch (status) {
      case 400:
        toast.error(data.message);
        break;
      case 401:
        toast.error(data.message);
        break;
      case 403:
        toast.error(data.message);
        break;
      case 404:
        toast.error(data.message);
        break;
      case 500:
        toast.error(data.message);
        break;
      default:
        break;
    }
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

const errors = {
  get400Error: () =>
    methods.get("errors/bad-request").catch((error) => console.log(error)),
  get401Error: () =>
    methods.get("errors/unauthorized").catch((error) => console.log(error)),
  get403Error: () =>
    methods.get("errors/validation-error").catch((error) => console.log(error)),
  get404Error: () =>
    methods.get("errors/not-found").catch((error) => console.log(error)),
  get500Error: () =>
    methods.get("errors/server-error").catch((error) => console.log(error)),
};

const requests = {
  products,
  errors,
};

export default requests;
