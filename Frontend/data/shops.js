// --------- Shop API ---------

export async function GetShops() {
  try {
    const response = await fetch("http://127.0.0.1:8000/shops/shops/", {
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
    console.error("Failed to fetch shops:", error);
    return false;
  }
}

export async function GetShop(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/shops/shops/${id}`, {
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
    console.error("Failed to fetch shop:", error);
    return false;
  }
}

export async function PostShop(shop) {
  const response = await fetch("/shops/shops/", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(shop),
  });
  return response;
}

export async function UpdateShop(shopId, shop) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shops/${shopId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shop),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Shop ${shopId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update shop ${shopId}:`, error);
    return false;
  }
}

export async function DeleteShop(shopId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shops/${shopId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Shop ${shopId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete shop ${shopId}:`, error);
    return false;
  }
}

// --------- ShopProduct API ---------

export async function GetShopProducts() {
  try {
    const response = await fetch("http://127.0.0.1:8000/shops/shopProduct/", {
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
    console.error("Failed to fetch shopProducts:", error);
    return false;
  }
}

export async function GetShopProduct(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shopProduct/${id}`,
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
    console.error("Failed to fetch shopProduct:", error);
    return false;
  }
}

export async function PostShopProduct(shopProduct) {
  try {
    const response = await fetch("http://127.0.0.1:8000/shops/shopProduct/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shopProduct),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("ShopProduct created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post shopProduct:", error);
    throw error;
  }
}

export async function UpdateShopProduct(shopProductId, shopProduct) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shopProduct/${shopProductId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopProduct),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`ShopProduct ${shopProductId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update shopProduct ${shopProductId}:`, error);
    return false;
  }
}

export async function DeleteShopProduct(shopProductId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shopProduct/${shopProductId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`ShopProduct ${shopProductId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete shopProduct ${shopProductId}:`, error);
    return false;
  }
}

// --------- Discount API ---------

export async function GetDiscounts(shopid) {
  const response = await fetch(`/shops/discounts/?shopid=${shopid}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function GetDiscount(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/discounts/${id}`,
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
    console.error("Failed to fetch discount:", error);
    return false;
  }
}

export async function PostDiscount(discount) {
  const response = await fetch("/shops/discounts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(discount),
  });
  return response;
}

export async function UpdateDiscount(discountId, discount) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/discounts/${discountId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discount),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Discount ${discountId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update discount ${discountId}:`, error);
    return false;
  }
}

export async function DeleteDiscount(discountId) {
  const response = await fetch(`/shops/discounts/${discountId}/`, {
    method: "DELETE",
    credentials: "include",
  });
  return response;
}

// --------- DiscountProduct API ---------

export async function GetDiscountProducts() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/shops/discountProduct/",
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
    console.error("Failed to fetch discountProduct:", error);
    return false;
  }
}

export async function GetDiscountProduct(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/discountProduct/${id}`,
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
    console.error("Failed to fetch discountProduct:", error);
    return false;
  }
}

export async function PostDiscountProduct(discountProduct) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/shops/discountProduct/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discountProduct),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("DiscountProduct created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post discountProduct:", error);
    throw error;
  }
}

export async function UpdateDiscountProduct(
  discountProductId,
  discountProduct
) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/discountProduct/${discountProductId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discountProduct),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`DiscountProduct ${discountProductId} updated:`, data);
    return data;
  } catch (error) {
    console.error(
      `Failed to update discountProduct ${discountProductId}:`,
      error
    );
    return false;
  }
}

export async function DeleteDiscountProduct(discountProductId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/discountProduct/${discountProductId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`DiscountProduct ${discountProductId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(
      `Failed to delete discountProduct ${discountProductId}:`,
      error
    );
    return false;
  }
}

// --------- ShopAdmin API ---------

export async function GetShopAdmins() {
  try {
    const response = await fetch("http://127.0.0.1:8000/shops/shopAdmin/", {
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
    console.error("Failed to fetch shopAdmins:", error);
    return false;
  }
}

export async function GetShopAdmin(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shopAdmin/${id}`,
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
    console.error("Failed to fetch shopAdmin:", error);
    return false;
  }
}

export async function PostShopAdmin(shopAdmin) {
  try {
    const response = await fetch("http://127.0.0.1:8000/shops/shopAdmin/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shopAdmin),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("ShopAdmin created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post shopAdmin:", error);
    throw error;
  }
}

export async function UpdateShopAdmin(shopAdminId, shopAdmin) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shopAdmin/${shopAdminId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shopAdmin),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`ShopAdmin ${shopAdminId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update shopAdmin ${shopAdminId}:`, error);
    return false;
  }
}

export async function DeleteShopAdmin(shopAdminId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/shops/shopAdmin/${shopAdminId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`ShopAdmin ${shopAdminId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete shopAdmin ${shopAdminId}:`, error);
    return false;
  }
}
