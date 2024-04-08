let posted = document.getElementById("post");
function openPosted() {

  posted.classList.add("open-posted");
}

function closePosted() {
  posted.classList.remove("open-posted")
}


// Picture upload stuff
document.getElementById('fileInput').addEventListener('change', function() {
        var file = this.files[0];
        var reader = new FileReader();
        
        reader.onload = function(e) {
          document.getElementById('imagePreview').src = e.target.result;
        }
        
        reader.readAsDataURL(file);
      });