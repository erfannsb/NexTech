
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



// Category Table

export async function GetCategories() {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/categories/", {
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
    console.error("Failed to fetch categories:", error);
    return false;
    }
  }


export async function GetCategory(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/categories/${id}`,
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
    console.error("Failed to fetch category:", error);
    return false;
  }
}


export async function  PostCategory(category) {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/categories/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Category created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post Category:", error);
    throw error;
  }
}


export async function UpdateCategory(categoryId, category) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/categories/${categoryId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`category ${categoryId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update category ${categoryId}:`, error);
    return false;
  }
}


export async function DeleteCategory(categoryId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/categories/${categoryId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Category ${categoryId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete category ${categoryId}:`, error);
    return false;
  }
}


// ProductCategory Table

export async function GetProductCategory() {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/productCategory/", {
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
    console.error("Failed to fetch product category:", error);
    return false;
    }
  }


export async function GetProductCategory(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/productCategory/${id}`,
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
    console.error("Failed to fetch product category:", error);
    return false;
  }
}


export async function  PostProductCategory(productCategory) {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/productCategory/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productCategory),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("ProductCategory created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post ProductCategory:", error);
    throw error;
  }
}


export async function UpdateProductCategory(productCategoryId, productCategory) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/productCategory/${categoryId}/`,

      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productCategory),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`productCategory ${productCategoryId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update productCategory ${productCategoryId}:`, error);
    return false;
  }
}


export async function DeleteProductCategory(productCategoryId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/productCategory/${productCategoryId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`productCategory ${productCategoryId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete productCategory ${productCategoryId}:`, error);
    return false;
  }
}


// Details Table

export async function GetDetails() {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/details/", {
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
    console.error("Failed to fetch details:", error);
    return false;
  }
}

export async function GetDetail(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/details/${id}`,
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
    console.error("Failed to fetch detail:", error);
    return false;
  }
}


export async function PostDetails(detail) {
  try {
    const response = await fetch("http://127.0.0.1:8000/products/details/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detail),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Details created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post details:", error);
    throw error;
  }
}

export async function UpdateDetail(detailId, detail) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/details/${detailId}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Product ${detailId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update product ${detailId}:`, error);
    return false;
  }
}

export async function DeleteDetail(detailId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/details/${detailId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Detail ${detailId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete detail ${detailId}:`, error);
    return false;
  }
}



// ImageurlProduct Table

export async function GetImageurlProducts(){
  try {
    const response = await fetch("http://127.0.0.1:8000/products/imageurlProduct/", {
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
    console.error("Failed to fetch image url product:", error);
    return false;
  }
}
export async function GetImageurlProductId(id){
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/imageurlProduct/${id}`,
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
    console.error("Failed to fetch imageurlproduct:", error);
    return false;
  }
}
export async function PostImageurlProduct(imageurlProduct){
  try {
    const response = await fetch("http://127.0.0.1:8000/products/imageurlProduct/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(imageurlProduct),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Image url Product created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post imageurlProduct:", error);
    throw error;
  }
}
export async function UpdateImageurlProduct(imageurlProductId, imageurlProduct){
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/imageurlProduct/${imageurlProductId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(imageurlProduct),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`ImageurlProduct ${imageurlProductId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update imageurlProduct ${imageurlProductId}:`, error);
    return false;
  }
}
export async function DeleteImageurlProduct(imageurlProductId){
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/imageurlProduct/${imageurlProductId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`imageurlProductId ${imageurlProductId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete imageurlProductId ${imageurlProductId}:`, error);
    return false;
  }
}


// Comment Table

export async function GetComments(){
  try {
    const response = await fetch("http://127.0.0.1:8000/products/comment/", {
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
    console.error("Failed to fetch comments:", error);
    return false;
  }
}
export async function GetCommentsId(id){
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/comment/${id}`,
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
    console.error("Failed to fetch comment:", error);
    return false;
  }
}
export async function PostComments(comment){
  try {
    const response = await fetch("http://127.0.0.1:8000/products/comment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Comment created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post comment:", error);
    throw error;
  }
}
export async function UpdateComments(commentId, comment) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/comment/${commentId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Comment ${commentId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update product ${commentId}:`, error);
    return false;
  }
}
export async function DeleteComments(commentId){
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/comment/${commentId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Comment ${commentId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete comment ${commentId}:`, error);
    return false;
  }
}
