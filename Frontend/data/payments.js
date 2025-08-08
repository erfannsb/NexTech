
// --------- Payment API ---------

export async function GetPayments() {
    try {
        const response = await fetch("http://127.0.0.1:8000/payments/payments/", {
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
        console.error("Failed to fetch payments:", error);
        return false;
    }
}

export async function GetPayment(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/payments/${id}`, {
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
        console.error("Failed to fetch payment:", error);
        return false;
    }
}

export async function PostPayment(payment) {
    try {
        const response = await fetch("http://127.0.0.1:8000/payments/payments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payment),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Payment created:", data);
        return data;
    } catch (error) {
        console.error("Failed to post payment:", error);
        throw error;
    }
}

export async function UpdatePayment(paymentId, payment) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/payments/${paymentId}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payment),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Payment ${paymentId} updated:`, data);
        return data;
    } catch (error) {
        console.error(`Failed to update payment ${paymentId}:`, error);
        return false;
    }
}

export async function DeletePayment(paymentId) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/payments/${paymentId}/`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(`Payment ${paymentId} deleted successfully`);
        return true;
    } catch (error) {
        console.error(`Failed to delete payment ${paymentId}:`, error);
        return false;
    }
}



// --------- Installment API ---------

export async function GetInstallments() {
    try {
        const response = await fetch("http://127.0.0.1:8000/payments/installments/", {
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
        console.error("Failed to fetch installments:", error);
        return false;
    }
}

export async function GetInstallment(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/installments/${id}`, {
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
        console.error("Failed to fetch installment:", error);
        return false;
    }
}

export async function PostInstallment(installment) {
    try {
        const response = await fetch("http://127.0.0.1:8000/payments/installments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(installment),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Installment created:", data);
        return data;
    } catch (error) {
        console.error("Failed to post installment:", error);
        throw error;
    }
}

export async function UpdateInstallment(installmentId, installment) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/installments/${installmentId}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(installment),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Installment ${installmentId} updated:`, data);
        return data;
    } catch (error) {
        console.error(`Failed to update installment ${installmentId}:`, error);
        return false;
    }
}

export async function DeleteInstallment(installmentId) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/installments/${installmentId}/`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(`Installment ${installmentId} deleted successfully`);
        return true;
    } catch (error) {
        console.error(`Failed to delete installment ${installmentId}:`, error);
        return false;
    }
}



// --------- InstallmentPayment API ---------

export async function GetInstallmentPayments() {
    try {
        const response = await fetch("http://127.0.0.1:8000/payments/installmentPayments/", {
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
        console.error("Failed to fetch installment payments:", error);
        return false;
    }
}

export async function GetInstallmentPayment(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/installmentPayments/${id}`, {
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
        console.error("Failed to fetch installment payment:", error);
        return false;
    }
}

export async function PostInstallmentPayment(installmentPayment) {
    try {
        const response = await fetch("http://127.0.0.1:8000/payments/installmentPayments/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(installmentPayment),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Installment payment created:", data);
        return data;
    } catch (error) {
        console.error("Failed to post installment payment:", error);
        throw error;
    }
}

export async function UpdateInstallmentPayment(installmentPaymentId, installmentPayment) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/installmentPayments/${installmentPaymentId}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(installmentPayment),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Installment payment ${installmentPaymentId} updated:`, data);
        return data;
    } catch (error) {
        console.error(`Failed to update installment payment ${installmentPaymentId}:`, error);
        return false;
    }
}

export async function DeleteInstallmentPayment(installmentPaymentId) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/payments/installmentPayments/${installmentPaymentId}/`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log(`Installment payment ${installmentPaymentId} deleted successfully`);
        return true;
    } catch (error) {
        console.error(`Failed to delete installment payment ${installmentPaymentId}:`, error);
        return false;
    }
}
