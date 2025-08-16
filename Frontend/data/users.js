// --------- Customer API ---------

import { data } from "react-router-dom";

export async function GetCustomers() {
  try {
    const response = await fetch("http://127.0.0.1:8000/users/customers/", {
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
    console.error("Failed to fetch customers:", error);
    return false;
  }
}

export async function GetCustomer(id) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/users/customers/${id}`,
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
    console.error("Failed to fetch customer:", error);
    return false;
  }
}

export async function PostCustomer(customer) {
  const response = await fetch("http://127.0.0.1:8000/users/customers/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
  console.log(response);
  const data = await response.json();
  return {
    data: data,
    ok: response.ok,
    status: response.status,
  };
}

export async function PatchCustomer(id, customer) {
  const response = await fetch(`/users/customers/${id}/`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  });
  return response;
}

export async function UpdateCustomer(customerId, customer) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/users/customers/${customerId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Customer ${customerId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update customer ${customerId}:`, error);
    return false;
  }
}

export async function DeleteCustomer(customerId) {
  try {
    const response = await fetch(`/users/customers/${customerId}/`, {
      credentials: "include",
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Customer ${customerId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete customer ${customerId}:`, error);
    return false;
  }
}

// --------- Admin API ---------

export async function GetAdmins() {
  try {
    const response = await fetch("http://127.0.0.1:8000/users/admins/", {
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
    console.error("Failed to fetch admins:", error);
    return false;
  }
}

export async function GetAdmin(id) {
  try {
    const response = await fetch(`http://127.0.0.1:8000/users/admins/${id}`, {
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
    console.error("Failed to fetch admin:", error);
    return false;
  }
}

export async function PostAdmin(admin) {
  try {
    const response = await fetch("http://127.0.0.1:8000/users/admins/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(admin),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Admin created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post admin:", error);
    throw error;
  }
}

export async function UpdateAdmin(adminId, admin) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/users/admins/${adminId}/`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(admin),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`Admin ${adminId} updated:`, data);
    return data;
  } catch (error) {
    console.error(`Failed to update admin ${adminId}:`, error);
    return false;
  }
}

export async function DeleteAdmin(adminId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/users/admins/${adminId}/`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(`Admin ${adminId} deleted successfully`);
    return true;
  } catch (error) {
    console.error(`Failed to delete admin ${adminId}:`, error);
    return false;
  }
}

//  --- USER AUTH ---

export async function isLoggedIn() {
  try {
    const res = await fetch("/api/auth/me/", {
      method: "GET",
      credentials: "include", // send HttpOnly cookies
    });
    let data = await res.json();
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return data; // true if user is authenticated
  } catch (err) {
    console.error("Error checking login:", err);
    return false;
  }
}

export async function logIn(Credentials) {
  const response = await fetch(`/api/auth/login/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Credentials),
  });
  return {
    data: await response.json(),
    ok: response.ok,
    status: response.status,
  };
}
