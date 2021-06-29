# React and Morty

## Story

Do you know Rick and Morty?
If not, start watching it!

Anyways, the Rick and Morty universe is kinda big with lot of characters and locations.
You with your friends decided that you want to make it easier to look up information about each characters and locations.
You want to create a React app that with the use of an open-source API, shows information about everything you need.
Your friend built the tools for the data fetching, you just need to use the data and build the app.

## What are you going to learn?

- Using react custom hooks
- Using paginated data

## Tasks

1. Start with the landing page. When someone enters the web site, they will see a big Rick and Morty logo with 2 buttons under it. The buttons will be the trigger to show the characters or the locations  but as default a short description about the page is shown under the buttons.
    - When the page opens up, we see a Rick and Morty logo
    - Under the logo there are two button, one for `Characters` and one for `Locations`
    - Until one of the buttons are clicked, there is a description describing the website functionality

2. Create a component where the characters are listed. Since the data is paginated, make it possible to jump between the pages.
    - If we click on the `Characters` button, a list of characters shows up
    - The list contains character cards, one card shows the given character `image`, `name` and `species`
    - At the end of the list there is a pagination bar where we can switch between pagination pages

3. Create a component where the locations are listed. Since the data is paginated, make it possible to jump between the pages.
    - If we click on the `Locations` button, a list of locations shows up
    - The list contains location cards, one card shows the given planet `name` and `type`
    - At the end of the list there is a pagination bar where we can switch between pagination pages

4. Create a single character component that shows more specific information about a character. When someone click on a character in the pagination list the component shows up.
    - When we click on a character in the list, more infomration shows up from the character

5. Create a single location component that shows more specific information about a location. When someone click on a character in the pagination list the component shows up.
    - When we click on a location in the list, more infomration shows up from the location

6. [OPTIONAL] It is easier to jump between pagination pages by just scrolling down. When the user scrolls down to the bottom of the list of characters/locations, the next list of characters/locations shows up at the bottom of the list and the user can continue to scroll down.
    - When a list of characters/locations shows up and we scoll down to the bottom of the list, new characters/locations show up at the bottom of the list
