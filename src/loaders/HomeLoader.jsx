import databaseService from "../appwrite/configuration";

export function HomeLoader() {
  return databaseService
    .getPosts()
    .then((result) => {
      if (result) {
        return result.documents;
      } else {
        throw new Response("No posts found", { status: 404 });
      }
    })
    .catch((error) => {
      console.error("Loader Error:", error);
      throw new Response("Failed to load posts", { status: 500 });
    });
}
