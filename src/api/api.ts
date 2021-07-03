import axios from "axios";

const apiKey = "a262abafb81f9fda26e4aa05d4eb7aa8"
const instance = axios.create({
    baseURL: "https://www.flickr.com/services/rest/",
})

export type PhotoType = {
    description: { _content: string }
    farm: number
    height_c: number
    id: string
    isfamily: number
    isfriend: number
    ispublic: number
    owner: string
    secret: string
    server: string
    title: string
    url_c: string
    width_c: number
    tags?: string
}

type PhotosType = {
    page: number
    pages: number
    perpage: number
    photo: Array<PhotoType>
    total: number
}

export type ResponseType = {
    photos: PhotosType
    stat: string
}

export const photoAPI = {
    getPhotos(tags: string, page?: number) {
        return instance.get<ResponseType>("?method=flickr.photos.search",
            {
                params: {
                    api_key: apiKey, privacy_filter: 1, extras: "description,url_c",
                    format: 'json', nojsoncallback: 1, per_page: 10, tags, page
                }
            })
            .then(response => response.data)
    }
}