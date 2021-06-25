interface PhotoType {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

export interface AlbumType {
    userId: number
    id: number
    title: string
    photos?: PhotoType[]
}
