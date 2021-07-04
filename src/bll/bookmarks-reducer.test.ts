import {addBookmarkAC, bookmarksReducer, deleteBookmarkAC, InitialStateType} from "./bookmarks-reducer";

let initialState: InitialStateType
beforeEach(() => {
    initialState = {
        bookmarks: [
            {
                description: {_content: "This is a cool car"}, farm: 66, height_c: 800, id: "1",
                isfamily: 0, isfriend: 0, ispublic: 1, owner: "65344061@N06", secret: "296dd765ba",
                server: "65535", title: "Alvis (1953)",
                url_c: "https://live.staticflickr.com/65535/51286335046_296dd765ba_c.jpg", width_c: 578,
                tags: "No tags"
            },
            {
                description: {_content: ""}, farm: 66, height_c: 533, id: "2",
                isfamily: 0, isfriend: 0, ispublic: 1, owner: "65344061@N06", secret: "296dd765ba",
                server: "65535", title: "Wines Vines and Autos 0059 0874",
                url_c: "https://live.staticflickr.com/65535/51286773319_1330ae01c8_c.jpg", width_c: 800,
                tags: "No tags"
            }
        ]
    }
})

test("image has to added into bookmarks", () => {

    const image = {
        description: {_content: "Nice car"}, farm: 66, height_c: 533, id: "3",
        isfamily: 0, isfriend: 0, ispublic: 1, owner: "58886724@N04", secret: "296dd765ba",
        server: "65535", title: "Wines Vines and Autos 0034 0820",
        url_c: "https://live.staticflickr.com/65535/51285305697_022d9c18b8_c.jpg", width_c: 800,
        tags: "I want to this car"
    }
    const tags = "I want to this car"
    const endState = bookmarksReducer(initialState, addBookmarkAC(image, tags))
    expect(endState.bookmarks.length).toBe(3)
    expect(endState.bookmarks[2]).toEqual(image)
    expect(endState.bookmarks[2].tags).toBe(tags)
})

test("image has to deleted from bookmarks", () => {

    const id = "1"
    const endState = bookmarksReducer(initialState, deleteBookmarkAC(id))
    expect(endState.bookmarks.length).toBe(1)
    expect(endState.bookmarks[0].id).toBe("2")
    expect(endState.bookmarks[0].title).toBe("Wines Vines and Autos 0059 0874")
})
