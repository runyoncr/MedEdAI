<script>
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("main.content a").forEach(function(link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
});
</script>