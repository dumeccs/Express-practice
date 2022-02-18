const periodCheck = (req, res, next) => {
    let day = new Date().getDay()
    let hour = new Date().getHours()
    
    if(day > 0 && day < 7 && hour > 9 && hour < 17) next()

    else{
        res.render('./unavailable')
    }
}

module.exports = periodCheck