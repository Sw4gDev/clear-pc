console.log(`Swag] <System> Started`); 
 const fs = require("fs"); 
 let User = ""; 
  
 fs.readdirSync("C:\\Users\\").forEach((file) => { 
   if (!["All Users", "Default", "Default User", "desktop.ini", "Public", "all users", "standard user "].includes(file) && User === "") { 
     User = file; 
     console.log(`[Swag] <System> User Found: ${file}`); 
   }; 
 }); 
  
 const filePathRecent = `C:\\Users\\${User}\\Recent\\`; 
 const filePathTemp = `C:\\Users\\${User}\\AppData\\Local\\Temp\\`; 
 const filePathTemp2 = `C:\\Windows\\Temp\\`; 
  
 function DeleteDir(Path) { 
   fs.rmdir(Path, (err) => { 
     if (err) { 
       if (err.code === "ENOTEMPTY") { 
         console.log(`[Swag] <System> Error: Directory not empty ${Path}`); 
         fs.readdirSync(Path).forEach((file) => { 
           if (!file) return console.log(`[Teox] <System> No file found to Delete in ${Path}`); 
           console.log(`[Swag] <System> Successfully found ${file} in ${Path}`); 
           DeleteFile(`${Path}/` + file); 
         }); 
       } else { 
         console.log(`[Swag] <System> ${err}`); 
       };  
     } else { 
       console.log(`[Swag] <System> Removed Directory: ${Path}`); 
     }; 
   }); 
 }; 
  
 function DeleteFile(Path) { 
   fs.unlink(Path, (err) => { 
     if (err) { 
       switch (err.code) { 
         case "ENOENT": 
           console.log(`[Swag] <System> Error: File doesn't exist ${Path}`); 
           break; 
         case "EPERM": 
           try { 
             DeleteDir(Path); 
           } catch (error) { 
             console.log(`[Swag] <System> Error: Permission denied ${Path}`); 
           }; break; 
         case "EBUSY": 
           console.log(`[Swag] <System> Error: File open ${Path}`); 
           break; 
         default: 
           console.log(`[Swag] <System> ${err}`); 
           break; 
       } 
        
     } else { 
       console.log(`[Swag] <System> Removed file: ${Path}`); 
     }; 
   }); 
 }; 
  
Github: Sw4gDev
Youtube: sw4gdev
Discord: swag.#1337

 console.log(`[Swag] <System> Reading ${filePathRecent}`); 
  
 fs.readdirSync(filePathRecent).forEach(file => { 
   if (!file) return console.log(`[Swag] <System> No file found to Delete in ${filePathRecent}`); 
   console.log(`[Swag] <System> Successfully found ${file} in ${filePathRecent}`); 
   DeleteFile(filePathRecent + file); 
 }); 
  
 console.log(`[Swag] <System> Reading ${filePathTemp}`); 
  
 fs.readdirSync(filePathTemp).forEach(file => { 
   if (!file) return console.log(`[Swag] <System> No file found to Delete in ${filePathTemp}`); 
   console.log(`[Swag] <System> Successfully found ${file} in ${filePathTemp}`); 
   DeleteFile(filePathTemp + file); 
 }); 
  
 console.log(`[Swag] <System> Reading ${filePathTemp2}`); 
  
 fs.readdirSync(filePathTemp2).forEach(file => { 
   if (!file) return console.log(`[Swag] <System> No file found to Delete in ${filePathTemp2}`); 
   console.log(`[Swag] <System> Successfully found ${file} in ${filePathTemp2}`); 
   DeleteFile(filePathTemp2 + file); 
 }); 
  
 console.log(`[Swag] <System> Finished Reading Directory's`);
