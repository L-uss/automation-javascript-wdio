class Prihlasky {

  get buttonApp() {return $('=Přihlášky')};
  get headerApp() {return $('.header_img')};
  get rows() {return $('tbody').$$('tr')};
  get tableRows() {
    const tableRows = []
    this.rows.forEach(row => {
      const cols = row.$$('td')
      tableRows.push(
        {
          name: cols[0].getText(),
          category: cols[1].getText(),
          date: cols[2].getText(),
          price: cols[3].getText()
        }
      )
    });
    return tableRows
  };

  clickApplications() {
    this.buttonApp.click() 
  };
  
  search(searchText) {
    $('input.form-control').setValue(searchText);
  }

};

module.exports = new Prihlasky();