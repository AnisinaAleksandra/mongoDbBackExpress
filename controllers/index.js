

class IndexController {
  static getIndex(req, res) {
    res.render('index', {
        title:"Распределяй"
    });
  }
}

module.exports = IndexController;
