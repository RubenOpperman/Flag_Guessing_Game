export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("HTTP error! status: ${response.status}");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("oopsies", error);
  }
}

return fetchData("https://flagfeed.com");
