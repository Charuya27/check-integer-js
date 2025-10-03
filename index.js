<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Check Integer</title>
</head>
<body>
  <script>
    let num = parseInt(prompt("Input integer number"));

    if (num === 0) {
      alert("zero integer number");
    } else if (num % 2 === 0) {
      alert("even integer number");
    } else {
      alert("odd integer number");
    }
  </script>
</body>
</html>
