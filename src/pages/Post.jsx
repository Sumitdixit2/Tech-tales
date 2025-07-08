import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import databaseService from "../appwrite/configuration";

export default function Post() {

    
    const  post = useLoaderData();
    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);



    const isAuthor = post && userData ? post.userId === userData.$id : false;


    
    
    const deletePost = async () => {
        try {
            const status = await databaseService.deletePost(post.$id);
            if (status) {
                await databaseService.fileDelete(post.featuredImage);
                navigate("/");
            }
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative rounded-xl p-2">
                    <img
                        src={databaseService.fileView(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl max-h-[500px] object-cover"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-black" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold dark:text-white text-center">{post.title}</h1>
                </div>

                <div className="browser-css dark:text-white text-center">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
