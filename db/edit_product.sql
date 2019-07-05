UPDATE products
SET product_name = $2, product_price = $3, product_image_url = $4
WHERE product_id = $1;