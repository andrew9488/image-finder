import axios from "axios";

const apiKey = "a262abafb81f9fda26e4aa05d4eb7aa8"
const secret = "ea342ef2a57cdc32"
const instance = axios.create({
    baseURL: "https://www.flickr.com/services/",
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

export type PhotoResponseType = {
    photos: PhotosType
    stat: string
}

type AuthResponseType = {
    oauth_callback_confirmed: boolean
    oauth_token: string
    oauth_token_secret: string
}

export const photoAPI = {
    getPhotos(tags: string, page?: number) {
        return instance.get<PhotoResponseType>("rest/?method=flickr.photos.search",
            {
                params: {
                    api_key: apiKey, privacy_filter: 1, extras: "description,url_c",
                    format: 'json', nojsoncallback: 1, per_page: 15, tags, page
                }
            })
            .then(response => response.data)
    }
}

export const authAPI = {
    getToken() {
        return instance.post<AuthResponseType>("oauth/request_token?",
            {
                params: {
                    oauth_consumer_key: apiKey, oauth_signature_method: "PLAINTEXT", oauth_signature: secret + "%" + 26,
                    oauth_timestamp: 1191242090, oauth_nonce: "hsu94j3884jdopsl", oauth_version: 1.0,
                    oauth_callback: "http%3A%2F%2Fandrew9488.github.io/image-finder%2Frequest_token_ready"
                }
            })
            .then((response => response.data))
    }
}