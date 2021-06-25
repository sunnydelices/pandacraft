export interface CommentType {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface PostType {
    userId: number
    id: number
    title: string
    body: string
    comments?: CommentType[]
}
