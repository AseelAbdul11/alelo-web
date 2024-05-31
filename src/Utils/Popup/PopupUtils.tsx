export const getCroppedImg = (images: any, crop: any, fileName: any) => {
  const canvas = document.createElement("canvas");
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
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error("Canvas is empty");
        return;
      }
      const fileUrl = window.URL.createObjectURL(blob);
      resolve(fileUrl);
    }, "image/jpeg");
  });
};
