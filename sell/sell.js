document.getElementById('fileInput').addEventListener('change', function() {
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function(e) {
          document.getElementById('imagePreview').src = e.target.result;
        }
        
        reader.readAsDataURL(file);
      });