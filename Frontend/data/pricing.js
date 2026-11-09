// Shared order pricing helpers, used by the admin dashboard and order manager.

export const DELIVERY_PRICE = (shipping) =>
  shipping.toLowerCase() === "express" ? 20 : 10; // Fixed delivery price

export const totalprice = (orderItems) =>
  orderItems.reduce(
    (acc, item) => acc + parseFloat(item.shop_product.price) * item.quantity,
    0
  );

export const totalItems = (orderItem) =>
  orderItem.reduce((acc, item) => acc + item.quantity, 0);

export const finalprice = (totalPrice, shipping) =>
  totalPrice + DELIVERY_PRICE(shipping);
