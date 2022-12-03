export const getUserInfo = async (userNames) =>
  await Promise.all(
    userNames.map(async (userNamesInstances) => {
      const userInformation = await fetch(
        `https://api.github.com/users/${userNamesInstances}`
      );
      return await userInformation.json();
    })
  );
