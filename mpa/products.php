<?php
$data = file_get_contents("products-mpa.json");
$products = json_decode($data, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Products - MPA</title>
  <link rel="stylesheet" href="app_php.css">
  <link rel="stylesheet" href="index_php.css">
</head>
<body>

  <nav class="navbar">
    <div class="navbar-left">
      <h1 class="logo">AHAMKARA</h1>
    </div>

    <div class="navbar-links">
      <a href="index.php">Home</a>
      <a href="products.php">Products</a>
      <a href="cart.php">Cart</a>
    </div>
  </nav>

  <main class="page-content">
    <h1>PRODUCTS (MPA)</h1>

    <div class="balls">
      <?php foreach ($products as $index => $product): ?>
        <?php $isFeatured = (($index + 1) % 9 === 0); ?>

        <div class="product-card <?php echo $isFeatured ? 'featured' : ''; ?>">
          <a href="product.php?id=<?php echo $product['id']; ?>">
            <img class="ball-image" src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
          </a>

          <h2>
            <a href="product.php?id=<?php echo $product['id']; ?>">
              <?php echo $product['name']; ?>
            </a>
          </h2>

          <p><?php echo $product['price']; ?> kr</p>
        </div>
      <?php endforeach; ?>
    </div>
  </main>

</body>
</html>