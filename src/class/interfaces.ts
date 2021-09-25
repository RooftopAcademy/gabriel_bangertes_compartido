interface ProductInterface {
    id: number;
    price: number;
    quantity: number;
    title: string;
    img: string;
    description: string;
}

interface CommentInterface {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
