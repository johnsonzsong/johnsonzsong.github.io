imgs=document.getElementsByTagName("img");
for(i = 0; i < imgs.length; i++) {
    img = imgs[i];
    img.onclick = () => {
        console.log("img: ", img);
    }
}