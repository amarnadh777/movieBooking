const cloudinary = require("cloudinary").v2;

const cloudinaryconfig = async () => {
  try {
    cloudinary.config({
      cloud_name: "dati6fdzg",
      api_key: "589318217265841",
      api_secret: "N6xBiWob6WnUsFLpmCVZOk9qym4",
    });
    console.log("cloudinary configartion success");
  } catch (error) {
    console.log(error);
  }
};
cloudinaryconfig();
module.exports;
