
"use client";
import { Product } from "@/lib/admin-api";

export default function ProductTable({

  products,

}:{

  products:Product[];

}){

  return(

    <table className="w-full">

      <thead>

        <tr className="border-b">

          <th>Image</th>

          <th>Name</th>

          <th>Category</th>

          <th>Vendor</th>

          <th>Price</th>

          <th>Stock</th>

          <th>Action</th>

        </tr>

      </thead>

      <tbody>

        {products.map(product=>(

          <tr
            key={product.id}
            className="border-b hover:bg-gray-50"
          >

            <td>

              <img

                src={`http://127.0.0.1:8000/images/${product.image}`}

                className="h-16 w-16 rounded-lg object-cover"

              />

            </td>

            <td>{product.name}</td>

            <td>{product.category?.name ?? "No Category"}</td>

            <td>{product.vendor}</td>

            <td>Rs {product.price}</td>

            <td>{product.stock}</td>

            <td>

              <button className="text-blue-600 mr-3">

                Edit

              </button>

              <button className="text-red-600">

                Delete

              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  )

}