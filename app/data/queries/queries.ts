export const getData = async (url: string) => {
  try {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      console.log('Not able to reach api');
    }
    return await res.json();
  } catch (err) {
    console.log('Something unexpected happend');
    return err;
  }
};
