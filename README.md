# playground.js

This is my personal playground.

## git submodules

Yup, i'm using submodules.
http://book.git-scm.com/5_submodules.html

### Adding a submodule

    git submodule add <url> lib/<name>

### Updating to the latest version of a submodule:

    cd lib/inheritance.js
    git checkout master
    git pull

### Committing the new version of a submodule we point to

    git add lib/inheritance.js
    git commit -m "pointing to a new version of submodule"
    
### Updating the project with all the newest versions of everything

    git pull
    git submodule update
    
### Cloning a project with submodules

    git submodule init
    git submodule update

## Pseudoclassical inheritance

Using my inheritance.js
Which should be called BaseClass.js

## Mixins

Gonna try this

## ADM modules, require.js

gonna see if I can use require.js to manage dependencies