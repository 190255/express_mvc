exports.index = (req, res) => {
    let data = {
        title: 'index page',
        message: 'welcome to homepage',
    }
    res.render("home/index.ejs", data)
}

exports.about = (req, res) => {
    let data = {
        title: 'about page',
        message: 'this is about page',
        name: 'Tokyo Taro',
    }
    res.render("home/about.ejs", data)
}

exports.items = (req, res) => {
    let items = [
        { name : 'apple', price: 150 },
        { name : 'orange', price: 200 },
        { name : 'peach', price: 350 },
    ]
    let data = {
        items: items,
    }
    res.render("home/items.ejs", data)
}
