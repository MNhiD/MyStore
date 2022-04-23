module.exports = {
    btn: {
        btnWomen: '//a[@title="Women"]',
        btnAdd: '//button[@class="exclusive"]',
        btnCheckout: '//a[@class="btn btn-default button button-medium"]',
        btnContinue: '//span[@class="continue btn btn-default button exclusive-medium"]'
    },

    lbl: {
        lblSub: 'Subcategories',
        lblTops: '//a[@class="subcategory-name" and text()="Tops"]',
        lblBlouses: '//a[@class="subcategory-name" and text()="Blouses"]',
        lblQuantity: 'Quantity',
        lblSize: 'Size',
        lblColor: 'Color'
    },
    
    txt: {
        txtAdd: 'Add to cart',
        txtSize: 'M',
        txtSuccess: 'Product successfully added to your shopping cart',
        txtEmpty: 'Blouse'
    },   

    blouse: '//h5[@itemprop="name"]/a[@class="product-name"]',
    sub: '(//a[@title="Subtract"])[2]',    
    plus: '//i[@class="icon-plus"]', 
    size: '//select[@id="group_1"]',   
    colorWhite: '//a[@title="White"]'
}