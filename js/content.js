function grabImages() {
  img_sources = []
  img_array = document.getElementsByTagName("img");
  for (var i = 0; i < img_array.length; i++) {
      img_sources.push(img_array[i].getAttribute("src"));
  }
  return img_sources
}
