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

export async function PostCategory(category) {
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

export async function GetProductCategories() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/products/productCategory/",
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

export async function PostProductCategory(productCategory) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/products/productCategory/",
      {
        method: "POST",
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
    console.log("ProductCategory created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post ProductCategory:", error);
    throw error;
  }
}

export async function UpdateProductCategory(
  productCategoryId,
  productCategory
) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/products/productCategory/${categoryId}/`,

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
    console.error(
      `Failed to update productCategory ${productCategoryId}:`,
      error
    );
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
    console.error(
      `Failed to delete productCategory ${productCategoryId}:`,
      error
    );
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
    const response = await fetch(
      `http://127.0.0.1:8000/products/details/${detailId}/`,
      {
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

export async function GetImageurlProducts() {}
export async function GetImageurlProductId() {}
export async function PostImageurlProduct() {}
export async function UpdateImageurlProduct() {}
export async function DeleteImageurlProduct() {}
