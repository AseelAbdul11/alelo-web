export const getCroppedImg = (images: any, crop: any, fileName: any) => {
  const canvas = document.createElement("canvas");
  images.crossOrigin = "Anonymous"
  const scaleX = images.naturalWidth / images.width;
  const scaleY = images.naturalHeight / images.height;
  canvas.width = crop.width;
  canvas.height = crop.height;
  const ctx: any = canvas.getContext("2d");
  ctx.drawImage(
    images,
    crop.x * scaleX,
    crop.y * scaleY,
    crop.width * scaleX,
    crop.height * scaleY,
    0,
    0,
    crop.width,
    crop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob : any) => {
      const file = new File(
        [blob],
        'croppedImage.png',  // Set the name of the file
        {
          type: 'image/png',
          lastModified: Date.now(),
        }
      );
      resolve(file)
    }, "image/jpeg");
  });
};
