const video = document.getElementById('camera');
const canvas = document.createElement('canvas'); // Offscreen canvas
const context = canvas.getContext('2d');
// 
let classID = document.querySelector('#classID');
let tutorID = document.querySelector('#tutorID');
let action = document.querySelector('#action'); 


window.onload = () => {
  openCamera(video);
};

function openCamera(videoElement) {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(stream => {
      video.srcObject = stream;
      video.setAttribute('playsinline', true); // Required for iOS
      video.play();
      requestAnimationFrame(scanQRCode);
    })
    .catch(error => {
      console.error("Error accessing camera:", error);
      Swal.fire("Error", "Unable to access the camera. Please check your device permissions.", "error");
    });
}

async function scanQRCode() {
  if (video.readyState === video.HAVE_ENOUGH_DATA) {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, canvas.width, canvas.height);

    if (code) {
      // Stop the camera stream
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      // Extract QR code data
      const qrData = code.data;
      // Mark attendance using QR code data
    //   let [classID, tutorID, userID] = qrData.split(","); // Example: "56,2,1"
      let userID = qrData;
      await markAttendance(classID.value, tutorID.value, userID, action.value);
      return; // Exit scanning
    }
  }
  requestAnimationFrame(scanQRCode);
}

function markAttendance(classID, tutorID, userID, action) {
  const params = {
    classID: classID,
    userID: userID,
    tutorID: tutorID,
    action : action
  };

  const url = domain+"Engine/attendance/mark-attendance.php";

  insertQuery(url, params).then(response => {
    if (response.status === "ok" && response.statusCode === 200) {
      Swal.fire("Success", response.message, "success");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      Swal.fire("Error", response.message, "error");
      console.log(response);
    }
  });
}