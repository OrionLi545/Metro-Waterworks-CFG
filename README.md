# MIT Code for Good 2021 - Metropolitan Waterworks Museum

This is the official repository for MIT's Code for Good 2021 Project with the Metropolitan Waterworks Museum.

The repository is a website designed to be served on localhost. Using images, data, and information provided by the museum, it showcases the history of the Boston public waterworks system, the details and functionalities of several hydraulic systems exhibited at the museum, as well as animations showing how these systems look like when they are active. 

This repository uses [jQuery](https://jquery.com/), [Youtube Player](https://developers.google.com/youtube/iframe_api_reference), and [Material Design Lite](https://getmdl.io/). We thank the developers of these projects for helping us.

## Installation and Running

Download the entire repository, run ```python -m http.server``` in the root folder of the repository (Python need to be version 3.x), and view the contents in any modern web browswer (currently does not support IE).

## Structure and Components

The website consist of three groups of components: menu pages, static pages, and pop-up pages.

### Menu Pages

The three menu pages: ```index.html```, ```menu.html```, and ```video.html``` are located in ```/```. They serve as the direction into different parts of the hydraulic systems, while presenting the introductory video to the history of Boston public waterworks

### Static Pages:

The six static pages for Leavitt Engine, Leavitt Pumps, Allis Engine, Allis Pumps, Worthington Engine, and Worthington Pumps are located in folders with corresponding names. They can be navigated from ```menu.html```. Each static page presents smaller-scale pictures of the corresponding systems, with highlighted borders around detailed parts. Users can type on these highlighted parts, which are in fact hidden polygon buttons, to access the pop-up page describing the part.

Static pages of Leavitt and Allis also present animations of how the system works.

### Pop-up Pages:

The many pop-up pages are located in sub-folders in ```/Leavitt```, ```/Allis```, and ```/Worthington```. They present close-up pictures of specific components of the hydraulic systems. 