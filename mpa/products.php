<?php
$data = file_get_contents("products.json");
$products = json_decode($data, true);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home - MPA</title>
  <link rel="stylesheet" href="app_php.css">
  <link rel="stylesheet" href="index_index.css">
  
  <!-- GOOGLE FONT -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
  <!-- GOOGLE FONT -->
</head>
<body>

   <nav class="navbar">
    <div class="navbar-left">
      <h1 class="logo">AHAMKARA</h1>
    </div>

    <div class="navbar-links">
      <a href="index.php">Home</a>
      <a href="products.php" class="active">Products </a>
      <a href="cart.php">Cart</a>
    </div>
  </nav>

  <main class="page-content">
    <h1>PRODUCTS</h1>

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