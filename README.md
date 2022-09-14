# RESTFUL Api example.

#### Purpose
Challenged by London App Brewery.
Coded by [Dennis Rotnov](https://www.dennisrotnov.com).

#### Process
Built using NodeJS, ExpresJS, MongoDB, Mongoose. Implements Get, Post, Put, Patch, Delete.
router.get('/', articles);
router.post('/', postReqArticles);
router.delete('/', deleteAllArticles);
router.get('/:articleName', specificArticle);
router.put('/:articleName', replaceArticle);
router.patch('/:articleName', patchSpecificArticle);
router.delete('/:articleName', deleteArticle);

