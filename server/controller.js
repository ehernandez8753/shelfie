module.exports = {
    getAllItems: (req, res) => {
        const db = req.app.get("db");
        db.get_inventory().then(dbRes =>{
            res.send(dbRes);
        });
    },

    addNewItem: (req, res) => {
        const db = req.app.get("db");
        let {product_name, product_price, product_image_url} = req.body;
        
        db.create_product([product_name, product_price, product_image_url])
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => console.log("Error in add item in controller", error));
        },

    editItem: (req, res) => {
        const db = req.app.get("db");
        let {product_id} = req.params;
        let {product_name, product_price, product_image_url} = req.query;

        db.edit_product(product_id, product_name, product_price, product_image_url)
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => console.log("Error in edit item in controller", error));
    },


    deleteItem: (req, res) => {
        const db = req.app.get("db");
        let {product_id} = req.params;

        db.delete_product(product_id)
        .then( () => {
            res.sendStatus(200);
        })
        .catch((error) => console.log("Error in delete item in controller", error));
    }
 }