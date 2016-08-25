# [HHSA Resource Center](http://resourcecenter.hsd.lan)
Intranet Project

## Table of contents

* [Directory Structure](#directory-structure)
* [Documentation](#documentation)
* [Code Examples](#code-examples)
* [Changelog](#changelog)
* [Creators](#creators)
* [Copyright and license](#copyright-and-license)

## Directory Structure
There are two structures, resourcecenter (production) and resourcetest (testing until further notice). resourcecenter's structure is the same as the dist/ from resourcetest, but no html specific folder (all .html in the root).

Within the directory's you'll find the following folders and files. SRC assets/css folder is compiled with PostCSS plugins into the Dist assets/css folder. JS will be compiled soon. Images are compressed in the gulp file.

```
hhsa/
├── dist/
│	├── assets/
│	│	├── css/
│	│	│   └── style.css
│	│	├── img/
│	│   	│   ├── icons/
│	│	│   │	└── icons.png (not all listed)
│	│	│   └── hero.png
│	│       └── js/
│	│   	    ├──animation.js
│	│           └── forms.js
│	└── html/		
│	    ├── emr/
│	    │	 └── emr.html
│	    ├── aod/
│	    │    └── aod.html
│	    ├── webforms/
│	    │	   └── forms.html (not all pages listed)
│	    └── index.html (not all pages listed)
│   
├── src/
│	├── assets/
│	│	├── css/
│	│   	│    ├── constants.css
│	│   	│    ├── content.css
│	│   	│    ├── footer.css
│	│   	│    ├── form.css
│	│   	│    ├── hero.css
│	│   	│    ├── main.css
│	│   	│    ├── media.css
│	│   	│    ├── menu.css
│	│	│    └── style.css
│	│	├── img/
│	│   	│   ├── icons/
│	│	│   │	└── icons.png (not all listed)
│	│	│   └── hero.png
│	│   	└── js/
│	│   	    ├──animation.js
│	│	    └── forms.js
│	└── html/		
│	    ├── secure/
│	    │	  └── emr.html
│	    ├── webforms/
│	    │	   └── forms.html (not all pages listed)
│	    └── index.html (not all pages listed)
│
├── README.md
├── gulpfile.js
├── package.json
└── sftp-config.json


```

## Bugs and feature requests

Contact kdrake@co.siskiyou.ca.us


## Documentation

See package.json for dependancies. 

**Naming conventions**

Classes are used by CSS
ID's are used by JS/JQ
Names/actions/methods are used by PHP
	
Use divs with class hooks for most styling. Generic top level stuff like 'body', 'p', 'a', and 'h1'-'h4' are styled a bit. Moving more stylings to the top and reusing existing stylings is best.
No need to be super verbose with the hooks. Don't include ID's/names if they aren't needed. As of 12/30/2015 they are only used on form pages.
	
File names and variable names should be short as possible without being impossible to understand. Everything is always lower case and alphanumeric. Css uses dashes '-' if necessary. File names and JS/JQ use underscores '_'. 
	
JS/JQ for page animations/functions should be kept to a minimum for easy maintenance by everyone. CSS animations are fully supported by IE 11, Edge, Chrome on all modern versions. 
Unfortunately transitions fire on page load in IE11. Until there is a good solution for this I have moved transitions to small screen calls as that is the main time they are used.
Transitions that are used in forms are not effected by this, neither are the navigation bar underlines.

Source CSS is compiled with Gulp (see gulpfile.js for setup). If the website moves servers, globally install gulp and --save-dev for modules at the top level of the directory. Gulp watch should be always running, start it on server (re)boot.


----------
##Code Examples

**Z-index levels**
>1-hero
>2-page title
>3-main and all content
>10-footer
>11-menu and navigation

**Colors**
>Background, h2: #f8fafa;
>Menu, titles, unchecked radio buttons: #02aab3; Teal
>Accent color, active/hovered buttons and input/textfields: #ffac01; 
>H3,h4, form text box color: #57787a;
>Body text color: #2e484a;



**Example CSS markup**

    .class  
    { 
	    position:    ; 	
	    z-index:     ; 	
	    overflow:    ;
	     	 
	    font:        ;
	    line:        ;
	     
	    width:       ; 
	    height:      ;
	    margins:     ; 	
	    padding:     ; 
	    border:      ;
	    
	    color:       ; 
	    background:  ;
	    
	    effect:      ;
	    transitions: ; 
    }

## Changelog

* 4/20/2016 - Gulp tasks "style"/"watch" now compiles to a named style.css. Solves multiple css files not combining with postcss-import
	
* 4/29/2016 - .htaccess made in /. Redirect ^/$ requests to dist/html. This allows html files to ../ to /assets

* 6/10/2016 - Restructured directories. Changed gulp dependancies.

* 6/22/2016 - Created Division 21 form (partially). Fixed form.js to grab hidden form sections better. Restyled form elements. Added accent color, change the greys and whites to have a teal tint to match the main color.


## Creators

**Kyler Drake**
<kdrake@co.siskiyou.ca.us>
<https://github.com/hhsa>


## Copyright and license

Copyright (C) County of Siskiyou Health and Human Services Agency - All Rights Reserved
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential
Written by Kyler Drake <kdrake@co.siskiyou.ca.us>, 2015-2016
