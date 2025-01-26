const homePage = (req, res) => {
    const currentYear = new Date().getFullYear();
    res.render('index', {
        title: 'Travlr Getaways',
        year: currentYear,
    });
};

module.exports = {
    homePage,
};
