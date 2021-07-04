import {
    clearPhotosAC,
    InitialStateType,
    photosReducer,
    setCurrentPageAC,
    setNumberOfPagesAC,
    setPhotosAC
} from "./photos-reducer";

let initialState: InitialStateType
beforeEach(() => {
    initialState = {
        photos: [
            {
                description: {_content: "This is a cool car"}, farm: 66, height_c: 800, id: "1",
                isfamily: 0, isfriend: 0, ispublic: 1, owner: "65344061@N06", secret: "296dd765ba",
                server: "65535", title: "Alvis (1953)",
                url_c: "https://live.staticflickr.com/65535/51286335046_296dd765ba_c.jpg", width_c: 578,
            }
        ],
        currentPage: 1,
        numberOfPages: null
    }
})

test("images have to set", () => {

    const photos = [
        {
            description: {_content: ""}, farm: 66, height_c: 533, id: "2",
            isfamily: 0, isfriend: 0, ispublic: 1, owner: "65344061@N06", secret: "296dd765ba",
            server: "65535", title: "Wines Vines and Autos 0059 0874",
            url_c: "https://live.staticflickr.com/65535/51286773319_1330ae01c8_c.jpg", width_c: 800,
        },
        {
            description: {_content: "Nice car"}, farm: 66, height_c: 533, id: "3",
            isfamily: 0, isfriend: 0, ispublic: 1, owner: "58886724@N04", secret: "296dd765ba",
            server: "65535", title: "Wines Vines and Autos 0034 0820",
            url_c: "https://live.staticflickr.com/65535/51285305697_022d9c18b8_c.jpg", width_c: 800,
        }
    ]
    const endState = photosReducer(initialState, setPhotosAC(photos))
    expect(endState.photos.length).toBe(2)
    expect(endState.photos[1].description._content).toBe("Nice car")
})

test("images have to cleared", () => {

    const endState = photosReducer(initialState, clearPhotosAC())
    expect(endState.photos.length).toBe(0)
})

test("current page has to set", () => {

    const currentPage = 6
    const endState = photosReducer(initialState, setCurrentPageAC(currentPage))
    expect(endState.currentPage).toBe(currentPage)
})

test("number of pages have to set", () => {

    const numbersOfPages = 321
    const endState = photosReducer(initialState, setNumberOfPagesAC(numbersOfPages))
    expect(endState.numberOfPages).toBe(numbersOfPages)
})