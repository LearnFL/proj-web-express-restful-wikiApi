# RESTFUL Api example.

#### Purpose
Challenged by London App Brewery.
Coded by [Dennis Rotnov](https://www.dennisrotnov.com).

#### Process
Built using NodeJS, ExpresJS, MongoDB, Mongoose. Implements Get, Post, Put, Patch, Delete. <br/>
The app is structured according MVC. <br/>

router.get('/', articles);<br/>
router.post('/', postReqArticles);<br/>
router.delete('/', deleteAllArticles);<br/>
router.get('/:articleName', specificArticle);<br/>
router.put('/:articleName', replaceArticle);<br/>
router.patch('/:articleName', patchSpecificArticle);<br/>
router.delete('/:articleName', deleteArticle);<br/>

