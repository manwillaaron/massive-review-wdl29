module.exports = {
    getMovies(req ,res){
        const db = req.app.get('db')
        db.get_movies().then(result=>{
            res.status(200).send(result)
        })
    },

    getGenres(req ,res){
        const db = req.app.get('db')
        db.get_genres().then(result=>{
            res.status(200).send(result)
        })
    }

}