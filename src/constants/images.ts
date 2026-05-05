export const DRIVE_FOLDER_LINK = "https://drive.google.com/drive/folders/1baEJLAFoN5TAlE7Qbgohi_IrOy2UqbLW?usp=sharing";

/**
 * To get the FILE_ID, open the image in Google Drive, click 'Share', 
 * ensure 'Anyone with the link' is selected, then copy the ID from the link.
 * Example link: https://drive.google.com/file/d/1ABC123/view -> ID is 1ABC123
 */
export const IMAGE_IDS = {
  entrance: "https://drive.google.com/file/d/16ydZ-o0yPQzQ-6RpP1tBGCtRJkhX81UE/view?usp=share_link", // Replace with real ID from Drive
  clothes: "https://drive.google.com/file/d/193tI1SsMLbGsFmROqWtBzeNl274oi6k2/view?usp=share_link",
  shop: "https://drive.google.com/file/d/1r1CmQPW0JoadVzn7K2jjJlWQ8f57JCSI/view?usp=share_link",
  coffee: "https://drive.google.com/file/d/1dpEHDLgfyOMzWRQHm3X6FUumpowDBkWE/view?usp=share_link",
  atelier: "https://drive.google.com/file/d/1EUtQP9Z-YocZ4zs_Vh8imd2AjuqjHHEC/view?usp=share_link",
};

export const getImageUrl = (id: string) => {
  if (id.startsWith("http")) return id;
  return `https://drive.google.com/uc?export=view&id=${id}`;
};
