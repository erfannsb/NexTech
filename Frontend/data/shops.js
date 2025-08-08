// --------- Shop API ---------

export async function GetShops() {
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

export async function GetShop(id) {}

export async function PostShop(shop) {}

export async function UpdateShop(shopId, shop) {}

export async function DeleteShop(shopId) {}



// --------- ShopProduct API ---------

export async function GetShopProducts() {}

export async function GetShopProduct(id) {}

export async function PostShopProduct(shopProduct) {}

export async function UpdateShopProduct(shopProductId, shopProduct) {}

export async function DeleteShopProduct(shopProductId) {}



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
