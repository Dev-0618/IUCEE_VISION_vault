function openVault() {
  const vault = document.getElementById('vault');
  const uploadForm = document.getElementById('uploadForm');
  
  vault.style.display = 'none';
  uploadForm.style.display = 'block';
}

document.getElementById('upload').addEventListener('submit', function (event) {
  event.preventDefault();
  const ideaFile = document.getElementById('ideaFile').files[0];
  const ideaTitle = document.getElementById('ideaTitle').value;
  const ideaDescription = document.getElementById('ideaDescription').value;

  // Here, you can use JavaScript and backend technologies (e.g., Node.js) to handle the form submission and save the user's uploaded file and data to the server.
  // For simplicity, this code does not include the server-side handling.
});
