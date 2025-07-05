// ./utils/favorites.tsx
import { getCurrentUser } from "./auth";

/**
 * Updates the user's favorites in the backend.
 * @param favorites The favorites array to save.
 * @returns Promise with the backend response.
 */
export async function updateUserFavorites(favorites: any[]) {
  const user = getCurrentUser();
  if (!user) return;

  const res = await fetch(
    "https://bobcatsgroup-bmcgynevf2e8afa0.canadacentral-01.azurewebsites.net/api/favorite/update-favorites",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user.username,
        favorites,
      }),
    }
  );

  return res.json();
}

/**
 * Gets the user's favorites from the backend.
 * @param username The username of the user.
 * @returns Promise with the favorites array.
 */
export async function getUserFavorites(username: string) {
  const res = await fetch(
    `https://bobcatsgroup-bmcgynevf2e8afa0.canadacentral-01.azurewebsites.net/api/favorite/get-favorites?username=${encodeURIComponent(
      username
    )}`
  );
  const data = await res.json();
  return data.favorites || [];
}
