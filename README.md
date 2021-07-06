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

![image-finder](https://github.com/andrew9488/image-finder/issues/2#issue-937589606)
“Bookmark it” button should be disabled or replaced to “Remove it” button if an image is added into bookmark.

![image-finder](https://github.com/andrew9488/image-finder/issues/3#issue-937589793)

## Details

There are few more things that will increase the possibility of being hired.
•	The UI may be implemented with using a UI framework, for example: Material UI, Bootstrap, whatever.
•	Code style is important.
•	More tests – more respect.
•	Use TypeScript
•	The code should be placed to any source control system.
•	Also, it would be nice to deploy the app to any public service to view it in action.
•	Bookmarks may be saved to one of public bookmarks services. The Profile window may be used for an authentication.
•	The app may monitor user’s activity; if there is no user activity (mouse movements), let’s say, in one minute, the app should end user session (if some 3rd party bookmarks service is used) and should display a mask over the user interface.
•	If we go with this activity monitoring, let’s handle few app tabs properly. If a user has opened two or more app tabs in the same browser window the app should monitor his activity in the active tab (if any) and should not lock other inactive tabs.
