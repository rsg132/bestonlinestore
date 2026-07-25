import api from "./api";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  vendor: string;
  category?: {
    id: number;
    name: string;
  };
}

export const adminApi = {

  async getProducts() {
    const response = await api.get("/products");
    return response.data;
  },

  async deleteProduct(id: number) {
    return api.delete(`/products/${id}`);
  },

  async createProduct(data: FormData) {
    return api.post("/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
 async getCategories() {
  const response = await api.get("/categories");
  return response.data;
},

  async updateProduct(id: number, data: FormData) {
    return api.post(`/products/${id}?_method=PUT`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

};