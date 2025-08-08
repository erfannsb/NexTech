
// Product Table

export async function GetProducts() {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/products/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return false;
  }
}

export async function GetProduct(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/products/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return false;
  }
}


export async function PostProducts(product) {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
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

export async function UpdateProduct(productId, product) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/products/${productId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Product ${productId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update product ${productId}:`, error);
    return false;
  }
}

export async function DeleteProduct(productId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/products/${productId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Product ${productId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete product ${productId}:`, error);
    return false;
  }
}

export async function UpdateProduct(productId, product) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/products/${productId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Product ${productId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update product ${productId}:`, error);
    return false;
  }
}

export async function DeleteProduct(productId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/products/${productId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Product ${productId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete product ${productId}:`, error);
    return false;
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