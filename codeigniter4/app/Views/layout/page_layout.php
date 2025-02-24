<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="bg-blue-50">
  <!-- Navbar -->
  <?= $this->include('layout/navbar');?>

  <div class="min-h-screen p-4">
    <!-- Sidebar -->
    <?= $this->include('layout/sidebar');?>

    <!-- Main Content -->
    <div id="mainContent" class="ml-20 gap-4 mt-20">
      <!-- First Column -->
      <!-- <div class="col-span-1 space-y-4">
        <div class="bg-white p-4 rounded-xl shadow-sm h-64"> -->
      <?= $this->renderSection('content') ?>
      <!-- </div>
      </div> -->
    </div>
  </div>


</body>

</html>
