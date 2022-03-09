import client from "../sanity-client";

export interface data {
  id: string;
  name: string;
}

export const getHomePageContent = async () => {
  const data = (await client.fetch(`*[_type == "test"]`))[0] as data;
  return data;
};
