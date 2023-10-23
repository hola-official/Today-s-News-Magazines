const axios = require('axios');
const express = require('express');
const newsRouter = express.Router();

newsRouter.get('', async (req, res) => {
    try {
        const newsApi = await axios.get('https://raddy.dev/wp-json/wp/v2/posts');
        res.render('news', { articles: newsApi.data })
    } catch (error) {
        if (error.response) {
            res.render('news', { articles: null })
            console.log(error.response.data);
            console.log(error.response.headers);
            console.log(error.response.status);
        } else if (error.request) {
            res.render('news', { articles: null })
        } else {
            res.render('news', { articles: null })
            console.error("Error", error.message);
        }
    }
})

newsRouter.get('/:id', async (req, res) => {
    let articleID = req.params.id
    try {
        const newsApi = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts/${articleID}`);
        res.render('newsSingle', { article: newsApi.data })
    } catch (error) {
        if (error.response) {
            res.render('newsSingle', { article: null });
            console.log(error.response.data);
            console.log(error.response.headers);
            console.log(error.response.status);
        } else if (error.request) {
            res.render('newsSingle', { article: null })
        } else {
            res.render('newsSingle', { article: null })
            console.error("Error", error.message);
        }
    }
})

newsRouter.post('', async (req, res) => {
    let search = req.body.search
    try {
        const newsApi = await axios.get(`https://raddy.dev/wp-json/wp/v2/posts?search=${search}`);
        res.render('newsSearch', { articles: newsApi.data })
    } catch (error) {
        if (error.response) {
            res.render('newsSearch', { articles: null });
            console.log(error.response.data);
            console.log(error.response.headers);
            console.log(error.response.status);
        } else if (error.request) {
            res.render('newsSearch', { articles: null })
        } else {
            res.render('newsSearch', { articles: null })
            console.error("Error", error.message);
        }
    }
})

module.exports = newsRouter;