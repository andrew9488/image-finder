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


//tried to make request for authorization, but CORS doesn't let me do it
type AuthResponseType = {
    oauth_callback_confirmed: boolean
    oauth_token: string
    oauth_token_secret: string
}
export type AuthExchangeTokenResponseType = {
    fullname: string
    oauth_token: string
    oauth_token_secret: string
    user_nsid: string
    username: string
}
export const authAPI = {
    getToken(date: number, random: string) {
        return instance.post<AuthResponseType>(`oauth/request_token?oauth_nonce=${random}`, {},
            {
                params: {
                    oauth_timestamp: date,oauth_consumer_key: apiKey,oauth_signature_method: "HMAC-SHA1",
                    oauth_version: 1.0, oauth_signature: secret,
                    oauth_callback: "https://andrew9488.github.io/image-finder"
                }
            })
            .then(response => response.data)
    },
    getAuth(oauth_token: string) {
        return instance.get<{ oauth_token: string, oauth_verifier: string }>(`oauth/authorize?oauth_token=${oauth_token}`)
            .then(response => response.data)
    },
    exchangeToken(date: number, random: string, oauth_verifier: string, oauth_token: string) {
        return instance.post<AuthExchangeTokenResponseType>(`oauth/access_token?oauth_nonce=${random}`, {},
            {
                params: {
                    oauth_timestamp: date, oauth_verifier: oauth_verifier,
                    oauth_consumer_key: apiKey, oauth_signature_method: "HMAC-SHA1",
                    oauth_version: 1.0, oauth_token: oauth_token, oauth_signature: secret
                }
            })
            .then(response => response.data)
    }
}