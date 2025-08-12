// --------- Customer API ---------

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
  try {
    const response = await fetch("http://127.0.0.1:8000/users/customers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Customer created:", data);
    return data;
  } catch (error) {
    console.error("Failed to post customer:", error);
    throw error;
  }
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
    const response = await fetch(
      `http://127.0.0.1:8000/users/customers/${customerId}/`,
      {
        method: "DELETE",
      }
    );

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
  const token = localStorage.getItem("access");
  if (!token) return false;

  const res = await fetch("http://127.0.0.1:8000/api/auth/me/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.ok; // true if valid token -> logged in
}
