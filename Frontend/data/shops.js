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
        const response = await fetch(
          `http://127.0.0.1:8000/shops/shops/${id}`,
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
        console.error("Failed to fetch shops:", error);
        return false;
      }
}

export async function PostShop(shop) {
    try {
        const response = await fetch("http://127.0.0.1:8000/shops/shops/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(shop),
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("Shop created:", data);
        return data;
      } catch (error) {
        console.error("Failed to post shop:", error);
        throw error;
      }
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
        const response = await fetch(
            `http://127.0.0.1:8000/shops/shopProduct/`, {
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
          `http://127.0.0.1:8000/products/categories/${shopProductId}/`,
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

export async function GetDiscounts() {}

export async function GetDiscount(id) {}

export async function PostDiscount(discount) {}

export async function UpdateDiscount(discountId, discount) {}

export async function DeleteDiscount(discountId) {}



// --------- DiscountProduct API ---------

export async function GetDiscountProducts() {}

export async function GetDiscountProduct(id) {}

export async function PostDiscountProduct(discountProduct) {}

export async function UpdateDiscountProduct(discountProductId, discountProduct) {}

export async function DeleteDiscountProduct(discountProductId) {}



// --------- ShopAdmin API ---------

export async function GetShopAdmins() {}

export async function GetShopAdmin(id) {}

export async function PostShopAdmin(shopAdmin) {}

export async function UpdateShopAdmin(shopAdminId, shopAdmin) {}

export async function DeleteShopAdmin(shopAdminId) {}
