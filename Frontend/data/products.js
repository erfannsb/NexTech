export async function GetProducts() {
  let data = await fetch("http://127.0.0.1:8000/products/products");
  data = await data.json();
  return data;
}


export async function PostProducts(product) {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: product.Name,
        Description: product.Description,
        Price: product.Price,
        StockQuantity: product.StockQuantity ?? 0,
        Rating: product.Rating ?? null,
        InstallmentPolicy: product.InstallmentPolicy ? 1 : 0,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Product created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post product:", error);
    throw error;
  }
}


// Category Table

export async function GetCategory() {
  let data = await fetch("http://127.0.0.1:8000/products/categories/");
  data = await data.json();
  return data;
}

export async function  PostCategory(category) {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/categories/")
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify
      categoryid: category.categoryid,
      categoryname: category.categoryname,
      description: category.description,
      parentcategory: 
  }
}