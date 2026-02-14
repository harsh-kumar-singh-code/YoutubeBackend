import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

console.log(process.env.CLOUDINARY_CLOUD_NAME);
console.log(process.env.CLOUDINARY_API_KEY);
console.log(process.env.CLOUDINARY_API_SECRET);

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const fixedPath = localFilePath.replace(/\\/g, "/");

        const response = await cloudinary.uploader.upload(fixedPath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
    console.log("CLOUDINARY ERROR:", error); // ⭐ ADD THIS
    
    if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
    }

    throw error; // ⭐ VERY IMPORTANT
}

}



export {uploadOnCloudinary}