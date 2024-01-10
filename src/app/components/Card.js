import Image from "next/image";

export default function Card({ title, image, description, brand, stock, rating, id, category }) {
  const imageDummy = "https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <a href={"https://dummyjson.com/products/" + id} target="_blank">
      <div className="bg-white border rounded-md w-72  hover:bg-gray-100 col-span-1 ">
        <Image className="w-full rounded-md h-72 object-cover" src={image || imageDummy} width={720} height={720} alt="Image products" />
        <div className="space-y-1 p-4">
          <div className="text-base font-medium text-blue-700">{brand || "Brand"}</div>
          <div className="text-2xl truncate  font-bold">{title || "Title"}</div>
          <div className="text-sm line-clamp-2 text-gray-600">{description || "Description"}</div>
          <div className="flex justify-between items-end">
            <div className="text-xs pt-1">⭐{rating || "5.0"} | Stock: {stock || "20"}</div>
            <div className="text-xs text-gray-600">{category || "Category"}</div>
          </div>
        </div>
      </div>
    </a>
  )
}