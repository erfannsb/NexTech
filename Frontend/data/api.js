export async function fetchWithAuth(callback) {
  let res = await callback();

  console.log("Res:", res);

  if (res.status === 401) {
    // try refreshing token
    const refresh = await fetch("/api/auth/refresh/", {
      method: "POST",
      credentials: "include",
    });

    console.log("refrsh: ", refresh);

    if (refresh.ok) {
      // Retry original request
      res = await callback();
    } else {
      // Refresh failed → user needs to log in again
      throw new Error("Session expired, please login");
    }
  }

  return res; // parse response
}
