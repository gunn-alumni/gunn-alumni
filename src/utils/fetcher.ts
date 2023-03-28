export const fetcher = async (
  input: RequestInfo,
  init?: RequestInit | undefined,
  withAuth = true
) => {
  //   console.log('[fetcher]', input, init, btype))
  let token = localStorage.getItem("token");

  console.log({ token });
  let res = await fetch(input, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
      ...(withAuth && token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
    },
  });

  return res;
  //   console.log('Requesting', input, btype, requestBuckets))
};
