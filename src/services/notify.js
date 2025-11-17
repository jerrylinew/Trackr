import emailjs from "emailjs-com";

// Initialize EmailJS with your User ID
emailjs.init("zsQDde7qgZg7w0LAH");

export async function sendMessage(info) {
  console.log(info);
  console.log(info.imageData);
  const notifyOwner = async () => {
    try {
      await emailjs.send("service_d78sugq", "template_43aq8ut", {
        to_email: info.email,
        owner_name: info.name,
        obj_name: info.objname,
        loc_link: `https://trackr-ecru.vercel.app/${encodeURIComponent(
          info.code
        )}/location`,
        //loc_link: "https://z9z8xg.csb.app/tcUNgBiwM4MK/location",
      });

      console.log("Owner notified successfully!");
    } catch (error) {
      console.error("Failed to send notification:", error);
      throw error;
    }
  };

  await notifyOwner();
}
