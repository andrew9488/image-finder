import {photoAPI, ResponseType} from "../api/api";
import {getPhotosTC, setNumberOfPagesAC, setPhotosAC} from "./photos-reducer";
import {setAppStatusAC} from "./app-reducer";

//Mocks a module with an auto-mocked version when it is being required. factory and options are optional.
jest.mock("../api/api")

// Our mock of `followAPI` is now fully typed
const photoAPIMock = photoAPI as jest.Mocked<typeof photoAPI>

//Returns a new, unused mock function. Optionally takes a mock implementation.
const mockedDispatch = jest.fn()
const mockedGetState = jest.fn()

const response: ResponseType = {
    stat: "ok",
    photos: {
        page: 1,
        pages: 20,
        perpage: 3,
        total: 100,
        photo: [
            {
                description: {_content: ""}, farm: 66, height_c: 419, id: "1", isfamily: 0, isfriend: 0,
                ispublic: 1, owner: "109861756@N08", secret: "6c7851c20e", server: "65535",
                title: "Manly Arena Event Will Without A Doubt Have You Looking Dapper!",
                url_c: "https://live.staticflickr.com/65535/51287726028_6c7851c20e_c.jpg", width_c: 800
            },
            {
                description: {_content: ""}, farm: 66, height_c: 419, id: "2", isfamily: 0, isfriend: 0,
                ispublic: 1, owner: "145648303@N06", secret: "0d7fe60a10", server: "65535",
                title: "Ralphys 86",
                url_c: "https://live.staticflickr.com/65535/51288493075_0d7fe60a10_c.jpg", width_c: 800
            },
            {
                description: {_content: "McLaren 650S - Geneva, Switzerland 2014"}, farm: 66, height_c: 419,
                id: "3", isfamily: 0, isfriend: 0, ispublic: 1, owner: "182092789@N02",
                secret: "0d7fe60a10", server: "65535", title: "McLaren 650S - Geneva 2014",
                url_c: "https://live.staticflickr.com/65535/51287163693_543cf86bd7_c.jpg", width_c: 800
            },
        ]
    }
}

beforeEach(() => {
    mockedDispatch.mockClear()
    mockedGetState.mockClear()
})

test("getPhotos thunk has to work correct", async () => {

    const photo = [
        {
            description: {_content: ""}, farm: 66, height_c: 419, id: "1", isfamily: 0, isfriend: 0,
            ispublic: 1, owner: "109861756@N08", secret: "6c7851c20e", server: "65535",
            title: "Manly Arena Event Will Without A Doubt Have You Looking Dapper!",
            url_c: "https://live.staticflickr.com/65535/51287726028_6c7851c20e_c.jpg", width_c: 800
        },
        {
            description: {_content: ""}, farm: 66, height_c: 419, id: "2", isfamily: 0, isfriend: 0,
            ispublic: 1, owner: "145648303@N06", secret: "0d7fe60a10", server: "65535",
            title: "Ralphys 86",
            url_c: "https://live.staticflickr.com/65535/51288493075_0d7fe60a10_c.jpg", width_c: 800
        },
        {
            description: {_content: "McLaren 650S - Geneva, Switzerland 2014"}, farm: 66, height_c: 419,
            id: "3", isfamily: 0, isfriend: 0, ispublic: 1, owner: "182092789@N02",
            secret: "0d7fe60a10", server: "65535", title: "McLaren 650S - Geneva 2014",
            url_c: "https://live.staticflickr.com/65535/51287163693_543cf86bd7_c.jpg", width_c: 800
        }
    ]

    photoAPIMock.getPhotos.mockReturnValue(Promise.resolve(response))
    let getPhotoThunk = getPhotosTC("cars", 1)
    await getPhotoThunk(mockedDispatch, mockedGetState, {})

    expect(mockedDispatch).toBeCalledTimes(4)
    expect(mockedDispatch).toHaveBeenNthCalledWith(1, setAppStatusAC("loading"))
    expect(mockedDispatch).toHaveBeenNthCalledWith(2, setAppStatusAC("succeeded"))
    expect(mockedDispatch).toHaveBeenNthCalledWith(3, setPhotosAC(photo))
    expect(mockedDispatch).toHaveBeenNthCalledWith(4, setNumberOfPagesAC(20))
})