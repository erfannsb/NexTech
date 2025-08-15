// --------- Ordering API ---------

export async function GetOrderings() {
  const response = await fetch(`/orders/orders/`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function GetOrdering(id) {
  const response = await fetch(`http://127.0.0.1:8000/orders/orders/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export async function PostOrdering(ordering) {
  try {
    const response = await fetch("/orders/orders/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ordering),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to post ordering:", error);
    throw error;
  }
}

export async function UpdateOrdering(orderingId, ordering) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orders/${orderingId}/`,
      {
        method: "PUT",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ordering),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(`Ordering ${orderingId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update ordering ${orderingId}:`, error);
    return false;
  }
}

export async function DeleteOrdering(orderingId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orders/${orderingId}/`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    console.log(`Ordering ${orderingId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete ordering ${orderingId}:`, error);
    return false;
  }
}

// --------- OrderItem API ---------

export async function GetOrderItems() {
  try {
    const response = await fetch("http://127.0.0.1:8000/orders/orderItems/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch orderItems:", error);
    return false;
  }
}

export async function GetOrderItem(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderItems/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch orderItem:", error);
    return false;
  }
}

export async function PostOrderItem(orderItem) {
  try {
    const response = await fetch("/orders/orderItems/", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderItem),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("OrderItem created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post orderItem:", error);
    throw error;
  }
}

export async function UpdateOrderItem(orderItemId, orderItem) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderItems/${orderItemId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderItem),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(`OrderItem ${orderItemId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update orderItem ${orderItemId}:`, error);
    return false;
  }
}

export async function DeleteOrderItem(orderItemId) {
  try {
    const response = await fetch(`/orders/orderItems/${orderItemId}/`, {
      credentials: "include",
      method: "DELETE",
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    console.log(`OrderItem ${orderItemId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete orderItem ${orderItemId}:`, error);
    return false;
  }
}

// --------- OrderPayment API ---------

export async function GetOrderPayments() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/orders/orderPayments/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch orderPayments:", error);
    return false;
  }
}

export async function GetOrderPayment(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderPayments/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch orderPayment:", error);
    return false;
  }
}

export async function PostOrderPayment(orderPayment) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/orders/orderPayments/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayment),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("OrderPayment created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post orderPayment:", error);
    throw error;
  }
}

export async function UpdateOrderPayment(orderPaymentId, orderPayment) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderPayments/${orderPaymentId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderPayment),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(`OrderPayment ${orderPaymentId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update orderPayment ${orderPaymentId}:`, error);
    return false;
  }
}

export async function DeleteOrderPayment(orderPaymentId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderPayments/${orderPaymentId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    console.log(`OrderPayment ${orderPaymentId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete orderPayment ${orderPaymentId}:`, error);
    return false;
  }
}

// --------- Shipping API ---------

export async function GetShippings() {
  try {
    const response = await fetch("http://127.0.0.1:8000/orders/shippings/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch shippings:", error);
    return false;
  }
}

export async function GetShipping(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/shippings/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch shipping:", error);
    return false;
  }
}

export async function PostShipping(shipping) {
  try {
    const response = await fetch("http://127.0.0.1:8000/orders/shippings/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shipping),
    });

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("Shipping created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post shipping:", error);
    throw error;
  }
}

export async function UpdateShipping(shippingId, shipping) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/shippings/${shippingId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(shipping),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(`Shipping ${shippingId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update shipping ${shippingId}:`, error);
    return false;
  }
}

export async function DeleteShipping(shippingId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/shippings/${shippingId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    console.log(`Shipping ${shippingId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete shipping ${shippingId}:`, error);
    return false;
  }
}

// --------- OrderShipping API ---------

export async function GetOrderShippings() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/orders/orderShippings/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch orderShippings:", error);
    return false;
  }
}

export async function GetOrderShipping(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderShippings/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch orderShipping:", error);
    return false;
  }
}

export async function PostOrderShipping(orderShipping) {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/orders/orderShippings/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderShipping),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log("OrderShipping created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post orderShipping:", error);
    throw error;
  }
}

export async function UpdateOrderShipping(orderShippingId, orderShipping) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderShippings/${orderShippingId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderShipping),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    console.log(`OrderShipping ${orderShippingId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update orderShipping ${orderShippingId}:`, error);
    return false;
  }
}

export async function DeleteOrderShipping(orderShippingId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/orders/orderShippings/${orderShippingId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    console.log(`OrderShipping ${orderShippingId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete orderShipping ${orderShippingId}:`, error);
    return false;
  }
}
