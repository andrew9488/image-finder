# Тестовое задание Elinext

[Посмотреть реализацию](https://andrew9488.github.io/image-finder)

## Objective

A customer needs a web app to search for images using Flickr. They also want to store some images in the Bookmarks section. See the mockup provided.

## Details

The app should provide an interface to do a simple search on Flickr. The search results area should provide a list of images with titles; also, there should be a possibility to store any image with arbitrary tags provided by the end user. Please note that search results may be huge, we will need a pagination
The Bookmarks area should list all the saved images with ability to remove any single item.
There is no limitation in frameworks except that the app should be built with the latest React.
Bookmarks are saved to the browser local storage.

## Mockups

![image-finder](https://user-images.githubusercontent.com/70233346/124558019-d81e3c00-de42-11eb-89d5-7aedb418668c.png)

![image-finder](https://user-images.githubusercontent.com/70233346/124558073-e3716780-de42-11eb-91cd-de8c3872293f.png)
“Bookmark it” button should be disabled or replaced to “Remove it” button if an image is added into bookmark.

![image-finder](https://user-images.githubusercontent.com/70233346/124558135-f1bf8380-de42-11eb-8c28-ddbda075f35f.png)

## Details

There are few more things that will increase the possibility of being hired.
1. The UI may be implemented with using a UI framework, for example: Material UI, Bootstrap, whatever.
2. Code style is important.
3. More tests – more respect.
4. Use TypeScript
5. The code should be placed to any source control system.
6. Also, it would be nice to deploy the app to any public service to view it in action.
7. Bookmarks may be saved to one of public bookmarks services. The Profile window may be used for an authentication.
8. The app may monitor user’s activity; if there is no user activity (mouse movements), let’s say, in one minute, the app should end user session (if some 3rd party bookmarks service is used) and should display a mask over the user interface.
9. If we go with this activity monitoring, let’s handle few app tabs properly. If a user has opened two or more app tabs in the same browser window the app should monitor his activity in the active tab (if any) and should not lock other inactive tabs.
